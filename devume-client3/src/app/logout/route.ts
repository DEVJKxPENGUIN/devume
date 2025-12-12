import {cookies} from "next/headers";
import {NextRequest} from "next/server";
import {redirect} from "next/navigation";

export async function GET(request: NextRequest) {
  const referer = request.headers.get('referer') || '/'
  const cookie = await cookies()
  cookie.delete('devumeauth')
  redirect(referer)
}
