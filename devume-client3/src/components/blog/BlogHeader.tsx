import styles from './BlogHeader.module.css'
import {BlogProfileRequest, BlogProfileResponse} from "@/proto/generated/Blog_pb";
import {Metadata} from "@grpc/grpc-js";
import {getBlogClient, grpcRequest} from "@/utils/grpcHandler";

export interface BlogHeaderProps {
  userId: number
}

export default async function BlogHeader(props: BlogHeaderProps) {
  const fetchBlog = async function (): Promise<BlogProfileResponse> {
    const request = new BlogProfileRequest()
    request.setUserid(props.userId)
    const meta = new Metadata()
    return await grpcRequest(getBlogClient(), "getBlogProfile", meta, request)
  }

  const blog = await fetchBlog()
  const title = blog.getTitle()
  const thumbnail = blog.getThumbnail()
  const summary = blog.getSummary()
  const introduce = blog.getIntroduce()

  return (
      <section className={styles.section}>
        <div className={styles.title}>
          {title}
        </div>
      </section>
  )
}