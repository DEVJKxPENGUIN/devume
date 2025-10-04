import type {ServiceClientConstructor} from '@grpc/grpc-js';
import grpc, {Metadata} from '@grpc/grpc-js';
import protoLoader from '@grpc/proto-loader';
import {fileURLToPath} from 'url';
import {dirname, join} from 'path';
import fs from 'fs'; // fs 모듈 임포트
import type {ServiceClient} from "@grpc/grpc-js/build/src/make-client";
import type {TitleResponse} from "~/.proto/TitleResponse";
import {getGrpcUrl, isLocal} from "~/common/commons";
import type {LoginResponse} from "~/.proto/LoginResponse";
import type {TokenResponse} from "~/.proto/TokenResponse";
import type {UserResponse} from "~/.proto/UserResponse";
import type {H3Event} from "h3";

export default class GrpcHandler {
  private static instance: GrpcHandler | null = null
  private services: Map<string, ServiceClient> = new Map()

  public static getInstance(): GrpcHandler {
    if (GrpcHandler.instance === null) {
      GrpcHandler.instance = new GrpcHandler()
    }
    return GrpcHandler.instance
  }

  private constructor() {
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = dirname(__filename)
    const grpcUrl = getGrpcUrl()
    let protoDir = '/app/proto'
    if (isLocal()) {
      protoDir = join(__dirname, '../../.proto')
    }

    // proto 디렉토리에서 .proto 파일 목록을 동적으로 읽어옴
    const protoFiles = fs.readdirSync(protoDir)
    .filter(file => file.endsWith('.proto'));

    for (const protoFile of protoFiles) {
      const protoName = protoFile.replace('.proto', ''); // 'Hello.proto' -> 'Hello'
      const PROTO_PATH = join(protoDir, protoFile);

      console.log(`Loading gRPC service from: ${PROTO_PATH} with URL: ${grpcUrl}`)

      const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true
      })

      const protoDescriptor = grpc.loadPackageDefinition(packageDefinition)
      // proto 파일 이름과 서비스 이름이 같다고 가정


      this.services.set(protoName, new (protoDescriptor[protoName] as ServiceClientConstructor)(
          grpcUrl, grpc.credentials.createInsecure()))
    }
  }

  async getTitle(event: H3Event): Promise<TitleResponse> {
    return new Promise((resolve, reject) => {
      this.services.get('Title')?.getTitle({}, (err: any, response: TitleResponse) => {
        this.handleGrpcResponse(resolve, reject, response, err, event)
      })
    })
  }

  async login(event: H3Event, state: string): Promise<LoginResponse> {
    return new Promise((resolve, reject) =>
        this.services.get('Login')?.login({
          state: state
        }, this.getAuthentication(event), (err: any, response: LoginResponse) => {
          this.handleGrpcResponse(resolve, reject, response, err, event)
        })
    )
  }

  async penguinToken(event: H3Event, code: string): Promise<TokenResponse> {
    return new Promise((resolve, reject) =>
        this.services.get('Login')?.penguinToken({
          code: code
        }, this.getAuthentication(event), (err: any, response: TokenResponse) => {
          this.handleGrpcResponse(resolve, reject, response, err, event)
        })
    )
  }

  async getUser(event: H3Event): Promise<UserResponse> {
    return new Promise((resolve, reject) =>
        this.services.get('User')?.getUser({}, this.getAuthentication(event), (err: any, response: UserResponse) => {
          this.handleGrpcResponse(resolve, reject, response, err, event)
        })
    )
  }

  async handleGrpcResponse(resolve: any, reject: any, response: any, err: any, event: H3Event) {
    if (err) {
      if (err.details && err.details.includes('::')) {
        const [errorCode, message] = err.details.split('::', 2);
        if (errorCode === 'NO_AUTHORIZED_ROLE_REDIRECT') {
          await sendRedirect(event, '/api/login?redirectUri=' + encodeURIComponent(getRequestURL(event).toString()));
          return
        }
      }
      reject(err)
    } else {
      resolve(response)
    }
  }

  getAuthentication(event: H3Event): Metadata {
    let token = ''
    try {
      token = getCookie(event, 'devumeauth') as string
    } catch (e) {
    }
    const metadata = new Metadata()
    metadata.add('Authorization', `Bearer ${token}`)
    return metadata
  }
}