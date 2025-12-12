import MarkdownEditor from "@/components/editor/MarkdownEditor";
import styles from './page.module.css';

export default async function PostPage() {
  return (
      <main className={styles.main}>
        <section className={styles.editSection}>
          <MarkdownEditor/>
        </section>
      </main>
  )
}