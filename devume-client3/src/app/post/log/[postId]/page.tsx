import {BlogContent, BlogRequest} from "@/proto/generated/Blog_pb";
import {getBlogClient, grpcRequest} from "@/utils/grpcHandler";
import {Metadata} from "@grpc/grpc-js";

export default async function PostViewPage({params}: { params: Promise<{ postId: number }> }) {
  const {postId} = await params
  const fetchPost = async function (): Promise<BlogContent> {
    const request = new BlogRequest()
    request.setPostid(postId)
    const meta = new Metadata()
    return await grpcRequest(getBlogClient(), "getBlog", meta, request)
  }

  const post = await fetchPost()

  // todo - post 창 그릴 것.

  return (
      <main>
      </main>
  )
}