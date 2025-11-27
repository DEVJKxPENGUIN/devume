import styles from './page.module.css';

export default function HomePage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to Devume!</h1>
      <p className={styles.description}>
        The best place for developers to showcase their portfolios.
      </p>
    </div>
  );
}
