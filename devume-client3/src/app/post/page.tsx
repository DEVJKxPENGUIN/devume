import MarkdownEditor from "@/components/editor/MarkdownEditor";
import styles from './page.module.css';
import {PreparePostRequest, PreparePostResponse} from "@/proto/generated/Blog_pb";
import {Metadata} from "@grpc/grpc-js";
import {getBlogClient, grpcRequest} from "@/utils/grpcHandler";

export default async function PostPage() {

  const post = await preparePost()

  return (
      <main className={styles.main}>
        <section className={styles.editSection}>
          <MarkdownEditor/>
        </section>
      </main>
  )
}

async function preparePost(): Promise<PreparePostResponse> {
  const request = new PreparePostRequest()
  const meta = new Metadata()
  return await grpcRequest(getBlogClient(), 'preparePost', meta, request)
}