import styles from './page.module.css';
import {PreparePostRequest, PreparePostResponse} from "@/proto/generated/Blog_pb";
import {Metadata} from "@grpc/grpc-js";
import {getBlogClient, grpcRequest} from "@/utils/grpcHandler";
import PostWrapper from "@/components/post/PostWrapper";

export default async function PostPage() {

  const preparePost = async function(): Promise<PreparePostResponse> {
    const request = new PreparePostRequest()
    const meta = new Metadata()
    return await grpcRequest(getBlogClient(), 'preparePost', meta, request)
  }

  const post: PreparePostResponse = await preparePost()

  return (
      <main className={styles.main}>
        <section className={styles.editSection}>
          <PostWrapper title={post.getTitle() || ''} content={post.getContent() || ''}/>
        </section>
      </main>
  )
}