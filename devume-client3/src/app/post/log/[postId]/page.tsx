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

  // todo -> get blog info
  // blog title, blog menus
  // post category - user db

  // todo - post 창 그릴 것.
  return (
      <main className={styles.main}>
        {/* todo blogSection 영역은 api 화 해야한다. */}
        <section className={styles.blogSection}>
          <div className={styles.blogTitle}>
            Devjk's diary
          </div>
        </section>
        <section className={styles.logSection}>
          <div className={styles.logTitleWrapper}>
            {post.getThumbnail() && (
                <Image
                    src={post.getThumbnail()}
                    alt={post.getTitle()}
                    fill
                    className={styles.logThumbnail}
                    priority
                />
            )}
            <div className={styles.logTitleOverlay}>
              <h1 className={styles.logTitleText}>
                {post.getTitle()}
              </h1>
            </div>
          </div>
          <div className={styles.logContentWrapper}>
            <div className={styles.logContent}>
              <MarkdownViewer content={post.getContents()} showSidebar={true}/>
            </div>

          </div>

        </section>
      </main>
  )
}
