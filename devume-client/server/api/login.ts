import GrpcHandler from "~/common/grpcHandler";
import {LoginResponse} from "~/.proto/LoginResponse";
import crypto from "crypto"

export default defineEventHandler(async (event) => {

  const query = getQuery(event)
  const redirectUri = query.redirectUri || '/'
  const state = crypto.randomUUID()

  await setUserSession(event, {state, redirectUri})

  const response: LoginResponse = await GrpcHandler.getInstance().login(event, state);
  const loginUrl: string = response.loginUrl as string

  await sendRedirect(event, loginUrl)
})
