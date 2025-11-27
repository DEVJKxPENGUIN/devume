import styles from './page.module.css';

type Props = {
  params: { nickname: string };
};

export default function UserProfilePage({ params }: Props) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{params.nickname}'s Profile</h1>
      <p className={styles.description}>
        This is the portfolio page for {params.nickname}.
      </p>
    </div>
  );
}
