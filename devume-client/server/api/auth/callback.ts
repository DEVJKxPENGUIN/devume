import GrpcHandler from "~/common/grpcHandler";
import {TokenResponse} from "~/.proto/TokenResponse";

export default defineEventHandler(async (event) => {

  const query = getQuery(event)
  const status = query['status'] as string
  const message = query['message'] as string
  const code = query['code'] as string
  const state = query['state'] as string

  if (status !== '0') {
    throw createError({
      statusCode: 400,
      statusMessage: `Authentication failed: ${message} (code: ${code})`
    })
  }

  const session = await getUserSession(event)
  if (!session || session['state'] !== state) {
    throw createError({statusCode: 400, statusMessage: 'Invalid state'})
  }

  console.log(`getredirectUri: ${session.redirectUri}`)

  const response: TokenResponse = await GrpcHandler.getInstance().penguinToken(code);

  setCookie(event, 'devumeauth', response['token']!!, {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
  })

  await sendRedirect(event, session.redirectUri as string)
})