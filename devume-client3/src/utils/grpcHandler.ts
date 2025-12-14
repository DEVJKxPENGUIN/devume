import * as grpc from '@grpc/grpc-js';
import {Metadata} from '@grpc/grpc-js';
import {TitleClient} from "@/proto/generated/Title_grpc_pb";
import {PortfolioClient} from "@/proto/generated/Portfolio_grpc_pb";
import {BlogClient} from "@/proto/generated/Blog_grpc_pb";
import {LoginClient} from "@/proto/generated/Login_grpc_pb";
import {UserClient} from "@/proto/generated/User_grpc_pb";
import {cookies, headers} from "next/headers";
import {redirect} from "next/navigation";

let titleClient: TitleClient | null = null
let portfolioClient: PortfolioClient | null = null;
let blogClient: BlogClient | null = null;
let loginClient: LoginClient | null = null;
let userClient: UserClient | null = null;

function getGrpcApiUrl(): string {
  const grpcApiUrl = process.env.GRPC_API_URL;
  if (!grpcApiUrl) {
    throw new Error('gRPC API URL is not defined in environment variables.');
  }
  return grpcApiUrl;
}

export function getTitleClient(): TitleClient {
  if (!titleClient) {
    const grpcApiUrl = getGrpcApiUrl();
    console.log(`Initializing gRPC Title client for URL: ${grpcApiUrl}`);
    titleClient = new TitleClient(grpcApiUrl, grpc.credentials.createInsecure());
  }
  return titleClient;
}

export function getPortfolioClient(): PortfolioClient {
  if (!portfolioClient) {
    const grpcApiUrl = getGrpcApiUrl();
    console.log(`Initializing gRPC Portfolio client for URL: ${grpcApiUrl}`);
    portfolioClient = new PortfolioClient(grpcApiUrl, grpc.credentials.createInsecure());
  }
  return portfolioClient;
}

export function getBlogClient(): BlogClient {
  if (!blogClient) {
    const grpcApiUrl = getGrpcApiUrl();
    console.log(`Initializing gRPC blog client for URL: ${grpcApiUrl}`);
    blogClient = new BlogClient(grpcApiUrl, grpc.credentials.createInsecure());
  }
  return blogClient;
}

export function getLoginClient(): LoginClient {
  if (!loginClient) {
    const grpcApiUrl = getGrpcApiUrl();
    console.log(`Initializing gRPC login client for URL: ${grpcApiUrl}`);
    loginClient = new LoginClient(grpcApiUrl, grpc.credentials.createInsecure());
  }
  return loginClient;
}

export function getUserClient(): UserClient {
  if (!userClient) {
    const grpcApiUrl = getGrpcApiUrl();
    console.log(`Initializing gRPC login client for URL: ${grpcApiUrl}`);
    userClient = new UserClient(grpcApiUrl, grpc.credentials.createInsecure());
  }
  return userClient;
}

export async function grpcRequest<TRequest, TResponse>(
    client: grpc.Client,
    methodName: string,
    meta: Metadata,
    request: TRequest
): Promise<TResponse> {
  const cookie = await cookies()
  const token = cookie.get('devumeauth')?.value || ''
  meta.add('Authorization', `Bearer ${token}`)

  try {
    return await new Promise((resolve, reject) => {
      (client as any)[methodName](request, meta, (error: grpc.ServiceError | null, response: TResponse) => {
        if (error) {
          return reject(error)
        }
        resolve(response)
      })
    })
  } catch (error: any) {
    if (error.metadata) {

      const appErrorCode = error.metadata.get("x-error-code")[0]

      const currentPath = (await headers()).get("x-current-path") || ''

      console.log('currentPath', currentPath)

      // no authorized -> redirect login
      if (appErrorCode == '-5') {
        redirect('http://localhost:3000/login?redirectUri=' + encodeURIComponent(currentPath))
      }

      // no authorized -> redirect error
      if (appErrorCode == '-4') {

      }

      console.error(`gRPC Error (${methodName}): ${error.message}`, appErrorCode)
    }
    throw error
  }
}
