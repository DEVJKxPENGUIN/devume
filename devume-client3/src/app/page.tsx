import styles from './page.module.css';
import {TitleRequest, TitleResponse} from "@/proto/generated/Title_pb";
import {getTitleClient, grpcRequest} from "@/utils/grpcHandler";
import {Metadata} from "@grpc/grpc-js";

export default async function HomePage() {

  const title = await fetchTitle();

  return (
      <main className={styles.main}>
        <section className={styles.heroSection}>
          <div className={styles.backgroundAnimation}>
            <div className={`${styles.shape} ${styles.shape1}`}></div>
            <div className={`${styles.shape} ${styles.shape2}`}></div>
            <div className={`${styles.shape} ${styles.shape3}`}></div>
            <div className={`${styles.shape} ${styles.shape4}`}></div>
          </div>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>DEVUME</h1>
            <h2 className={styles.subtitle}>{title}</h2>
            <p className={styles.description}>
              The best place for developers to showcase their portfolios.
            </p>
          </div>
        </section>
        <section className={styles.portfolioSection}>
          <h2 className={styles.sectionTitle}>Portfolios</h2>
          {/* Portfolio content will go here */}
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
