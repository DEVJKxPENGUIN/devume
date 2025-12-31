import {NextRequest, NextResponse} from "next/server";
import crypto from "crypto";

export async function POST(request: NextRequest) {

  const body = await request.json()

  const secretKey = process.env.CLOUDINARY_SECRET || ''

  console.log('secretKey!!!!!!!: ', secretKey)

  const sortedKeys = Object.keys(body).sort()

  const params = sortedKeys.map(key => `${key}=${body[key]}`)
  .join('&')

  const finalParam = params + secretKey

  console.log('final param!!! ', finalParam)

  const signature = crypto
  .createHash('sha1')
  .update(finalParam)
  .digest('hex')

  return NextResponse.json({
    signature
  })
}