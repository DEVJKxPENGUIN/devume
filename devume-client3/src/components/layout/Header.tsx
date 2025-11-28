import Link from 'next/link';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          DEVUME
        </Link>
        <nav className={styles.nav}>
          <Link href="/users/devjk" className={styles.navLink}>
            My Profile (Sample)
          </Link>
        </nav>
      </div>
    </header>
  );
};
