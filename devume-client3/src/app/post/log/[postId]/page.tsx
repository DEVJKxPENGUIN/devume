import styles from '../../page.module.css';
import {BlogContent, BlogRequest} from "@/proto/generated/Blog_pb";
import {getBlogClient, grpcRequest} from "@/utils/grpcHandler";
import {Metadata} from "@grpc/grpc-js";
import MarkdownViewer from "@/components/editor/MarkdownViewer";
import Image from "next/image";

export default async function PostViewPage({params}: { params: Promise<{ postId: number }> }) {
  const {postId} = await params
  const fetchPost = async function (): Promise<BlogContent> {
    const request = new BlogRequest()
    request.setPostid(postId)
    const meta = new Metadata()
    return await grpcRequest(getBlogClient(), "getBlog", meta, request)
  }

  const post = await fetchPost()

  const thumbnail = post.getThumbnail()

  // todo -> get blog info
  // blog title, blog menus
  // post category - user db

  // todo - post 창 그릴 것.
  return (
      <main>
        {/* todo blogSection 영역은 api 화 해야한다. */}
        <section className={styles.blogSection}>
          <div className={styles.blogTitle}>
            Devjk's diary
          </div>
        </section>
        <section className={styles.logSection}>
          <div className={styles.logTitleWrapper}>
            <Image
                src={post.getThumbnail()}
                alt={post.getTitle()}
                fill
                priority
            />
          </div>

          <div className={styles.logTitle}>
            {post.getTitle()}
          </div>
          <div className={styles.logContent}>
            <MarkdownViewer content={post.getContents()}/>
          </div>
        </section>
      </main>
  )
}