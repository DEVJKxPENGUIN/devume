import GrpcHandler from "~/common/grpcHandler";
import {HelloResponse} from "~/.proto/HelloResponse";

export default defineEventHandler(async (event): Promise<HelloResponse> => {
  return await GrpcHandler.getInstance().sayHello('devjk')
})