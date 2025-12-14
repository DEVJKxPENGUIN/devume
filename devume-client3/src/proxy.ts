import {NextRequest, NextResponse} from "next/server";

export default function proxy(request: NextRequest) {
  const headers = new Headers(request.headers)
  headers.set('x-current-path', request.url)

  return NextResponse.next({
    request: {
      headers: headers
    }
  })
}