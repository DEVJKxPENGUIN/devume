import {SessionOptions} from "iron-session";

export interface SessionData {
  oauthState?: string,
  oauthRedirectUri?: string
}

export const sessionOptions: SessionOptions = {
  password: process.env.SESSION_PASSWORD || '',
  cookieName: 'devumesess',
  cookieOptions: {
    secure: true
  }
}