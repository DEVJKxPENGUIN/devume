import styles from './page.module.css';
import {TitleRequest, TitleResponse} from "@/proto/generated/Title_pb";
import {PortfolioRequest, PortfolioResponse} from "@/proto/generated/Portfolio_pb";
import {getPortfolioClient, getTitleClient, grpcRequest} from "@/utils/grpcHandler";
import {Metadata} from "@grpc/grpc-js";
import DevumeTitle from "@/components/home/DevumeTitle";
import BackgroundLoop from "@/components/home/BackgroundLoop";
import PortfolioCard from "@/components/home/PortfolioCard";

export default async function HomePage() {

  const title = await fetchTitle();
  const portfolios = await fetchPortfolios(6);

  return (
      <main className={styles.main}>
        <section className={styles.heroSection}>
          <BackgroundLoop/>
          <div className={styles.heroContent}>
            <DevumeTitle/>
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
            {portfolios.map((portfolio, index) => (
                <PortfolioCard
                    key={index}
                    title={portfolio.getTitle()}
                    description={portfolio.getDescription()}
                    nickname={portfolio.getAuthor()}
                    image={portfolio.getProfileimage()}
                    thumbs={portfolio.getThumbs()}
                    views={portfolio.getViews()}
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

async function fetchPortfolios(count: number) {
  try {
    const request = new PortfolioRequest();
    request.setCount(count);
    const meta = new Metadata();
    const response: PortfolioResponse = await grpcRequest(getPortfolioClient(), 'getPortfolios', meta, request);
    return response.getPortfoliosList();
  } catch (error) {
    console.error('Failed to fetch portfolios:', error);
    return []; // Fallback to an empty array
  }
}
