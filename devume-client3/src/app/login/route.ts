import {NextRequest} from "next/server";
import {cookies} from "next/headers";
import {getIronSession} from "iron-session";
import {SessionData, sessionOptions} from "@/lib/session";
import {getLoginClient, grpcRequest} from "@/utils/grpcHandler";
import {LoginRequest, LoginResponse} from "@/proto/generated/Login_pb";
import {Metadata} from "@grpc/grpc-js";
import {redirect, RedirectType} from "next/navigation";

export async function GET(request: NextRequest) {

  const query = request.nextUrl.searchParams
  const redirectUri = query.get('redirectUri') || '/'
  const state = crypto.randomUUID()

  const cookie = await cookies()
  const session = await getIronSession<SessionData>(cookie, sessionOptions)
  session.oauthState = state
  session.oauthRedirectUri = redirectUri
  await session.save()

  const loginRequest = new LoginRequest()
  loginRequest.setState(state)
  const meta = new Metadata()

  const loginResponse: LoginResponse = await grpcRequest(getLoginClient(), 'login', meta, loginRequest)

  redirect(loginResponse.getLoginurl(), RedirectType.replace)
}
