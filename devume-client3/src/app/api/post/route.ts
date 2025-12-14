import {NextRequest, NextResponse} from "next/server";
import {WriteRequest, WriteResponse} from "@/proto/generated/Blog_pb";
import {getBlogClient, grpcRequest} from "@/utils/grpcHandler";
import {Metadata} from "@grpc/grpc-js";

export async function POST(request: NextRequest) {
  const body = await request.json()
  const req = new WriteRequest()
  req.setPostid(body.id)
  req.setTitle(body.title)
  req.setContents(body.contents)
  req.setThumbnail(body.thumbnail)
  const response: WriteResponse = await grpcRequest(getBlogClient(), "write", new Metadata(), req)

  console.log(response)

  return NextResponse.json(response.toObject())
}