import * as grpc from '@grpc/grpc-js';
import {Metadata} from '@grpc/grpc-js';
import {TitleClient} from "@/proto/generated/Title_grpc_pb";

let titleClient: TitleClient | null = null

export function getTitleClient(): TitleClient {
  if (!titleClient) {
    const grpcApiUrl = process.env.GRPC_API_URL
    if (!grpcApiUrl) {
      throw new Error('gRPC API URL is not defined in environment variables.')
    }
    console.log(`Initializing gRPC client for URL: ${grpcApiUrl}`)
    titleClient = new TitleClient(grpcApiUrl, grpc.credentials.createInsecure())
  }
  return titleClient
}

export function grpcRequest<TRequest, TResponse>(
    client: grpc.Client,
    methodName: string,
    meta: Metadata,
    request: TRequest
): Promise<TResponse> {
  return new Promise((resolve, reject) => {
    (client as any)[methodName](request, meta, (error: grpc.ServiceError | null, response: TResponse) => {
      if (error) {
        console.error(`gRPC Error (${methodName}):`, error);
        return reject(error);
      }
      resolve(response);
    });
  });
}