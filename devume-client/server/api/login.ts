import GrpcHandler from "~/common/grpcHandler";
import {LoginResponse} from "~/.proto/LoginResponse";
import crypto from "crypto"

export default defineEventHandler(async (event) => {

  const query = getQuery(event)
  const redirectUri = query.redirectUri || '/'
  const state = crypto.randomUUID()

  console.log(`login redirectUri: ${redirectUri}`)

  await setUserSession(event, {state, redirectUri})

  const session = await getUserSession(event)
  console.log(`set redirectUri: ${session.redirectUri}`)

  const response: LoginResponse = await GrpcHandler.getInstance().login(state);
  const loginUrl: string = response.loginUrl as string

  await sendRedirect(event, loginUrl)
})
