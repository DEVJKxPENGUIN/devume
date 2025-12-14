import {UserRequest, UserResponse} from "@/proto/generated/User_pb";
import {Metadata} from "@grpc/grpc-js";
import {getUserClient, grpcRequest} from "@/utils/grpcHandler";

export enum PHASE {
  LOCAL = 'local',
  PROD = 'prod',
}

export function getPhase(): PHASE {
  return (process.env.PHASE || PHASE.LOCAL) as PHASE;
}

export function isLocal(): Boolean {
  return getPhase() === PHASE.LOCAL;
}

export function isProd(): Boolean {
  return getPhase() === PHASE.PROD;
}

export function getGrpcUrl(): string {
  return process.env.GRPC_API_URL || 'localhost:9090';
}

export async function getUser(redirect: boolean = false): Promise<UserResponse> {
  try {
    const request = new UserRequest()
    const meta = new Metadata()
    return await grpcRequest(getUserClient(), 'getUser', meta, request)
  } catch (error) {
    console.error('Failed to fetch blogs:', error);
    throw new Error('Failed to fetch user')
  }
}