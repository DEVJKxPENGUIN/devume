import {NextRequest, NextResponse} from "next/server";
import {getBlogClient, grpcRequest} from "@/utils/grpcHandler";
import {Metadata} from "@grpc/grpc-js";
import {ValidationRequest, ValidationResponse} from "@/proto/generated/Blog_pb";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const req = new ValidationRequest()
  req.setTitle(body.title)
  req.setContents(body.contents)
  const response: ValidationResponse = await grpcRequest(getBlogClient(), "validate", new Metadata(), req)

  return NextResponse.json(response.toObject())
}