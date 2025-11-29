import styles from './page.module.css';
import {TitleRequest, TitleResponse} from "@/proto/generated/Title_pb";
import {getTitleClient, grpcRequest} from "@/utils/grpcHandler";
import {Metadata} from "@grpc/grpc-js";
import DevumeTitle from "@/components/home/DevumeTitle";
import BackgroundLoop from "@/components/home/BackgroundLoop";
import PortfolioCard from "@/components/home/PortfolioCard";
import { mockPortfolios } from '@/data/mockPortfolios';

export default async function HomePage() {

  const title = await fetchTitle();

  return (
      <main className={styles.main}>
        <section className={styles.heroSection}>
          <BackgroundLoop />
          <div className={styles.heroContent}>
            <DevumeTitle />
            <h2 className={styles.subtitle}>{title}</h2>
            <p className={styles.description}>
              The best place for developers to showcase their portfolios.
            </p>
          </div>
        </section>

        <section className={styles.commonSection}>
          <div className={styles.subSection}>
            <h2 className={styles.sectionTitle}>Portfolios</h2>
          </div>
          <div className={styles.contentSection}>
            {mockPortfolios.map((portfolio, index) => (
              <PortfolioCard
                key={index}
                title={portfolio.title}
                description={portfolio.description}
                nickname={portfolio.nickname}
                image={portfolio.image}
                thumbs={portfolio.thumbs}
                views={portfolio.views}
              />
            ))}
          </div>
        </section>

        <section className={styles.commonSection}>
          <div className={styles.subSection}>
            <h2 className={styles.sectionTitle}>Blogs</h2>
          </div>
          <div className={styles.contentSection}>
            {/* Blog content will go here */}
          </div>
        </section>
      </main>
  );
}

async function fetchTitle(): Promise<string> {
  try {
    const request = new TitleRequest();
    const meta = new Metadata();
    const response: TitleResponse = await grpcRequest(getTitleClient(), 'getTitle', meta, request);
    return response.getTitle();
  } catch (error) {
    console.error('Failed to fetch title:', error);
    return "Showcase Your Work"; // Fallback title
  }
}
