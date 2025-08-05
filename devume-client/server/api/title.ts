import GrpcHandler from "~/common/grpcHandler";
import {TitleResponse} from "~/.proto/TitleResponse";

export default defineEventHandler(async (event): Promise<TitleResponse> => {
  return await GrpcHandler.getInstance().getTitle();
})
