import {NextRequest} from "next/server";
import {getIronSession} from "iron-session";
import {SessionData, sessionOptions} from "@/lib/session";
import {cookies} from "next/headers";
import {TokenRequest, TokenResponse} from "@/proto/generated/Login_pb";
import {getLoginClient, grpcRequest} from "@/utils/grpcHandler";
import {Metadata} from "@grpc/grpc-js";
import {redirect, RedirectType} from "next/navigation";

export async function GET(request: NextRequest) {

  const query = request.nextUrl.searchParams
  const status = query.get('status')
  const message = query.get('message')
  const code = query.get('code')
  const state = query.get('state')

  // fixme -> next common error
  if (status !== '0') {
    throw new Error(`Authentication failed: ${message} (code: ${code})`)
  }

  const cookie = await cookies()
  const session = await getIronSession<SessionData>(cookie, sessionOptions)
  if (!session || session.oauthState !== state) {
    throw new Error('Invalid state')
  }

  const tokenRequest = new TokenRequest()
  tokenRequest.setCode(code!!)
  const meta = new Metadata()
  const response: TokenResponse = await grpcRequest(getLoginClient(), 'penguinToken', meta, tokenRequest)

  cookie.set('devumeauth', response.getToken(), {
    httpOnly: true,
    secure: true,
    sameSite: 'lax'
  })

  redirect(session.oauthRedirectUri!!, RedirectType.replace)
}