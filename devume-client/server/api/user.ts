import GrpcHandler from "~/common/grpcHandler";
import {UserResponse} from "~/.proto/UserResponse";

export default defineEventHandler(async (event): Promise<UserResponse> => {
  return await GrpcHandler.getInstance().getUser(event)
})