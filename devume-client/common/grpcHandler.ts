import type {ServiceClientConstructor} from '@grpc/grpc-js';
import grpc from '@grpc/grpc-js';
import protoLoader from '@grpc/proto-loader';
import {fileURLToPath} from 'url';
import {dirname, join} from 'path';
import fs from 'fs'; // fs 모듈 임포트
import type {ServiceClient} from "@grpc/grpc-js/build/src/make-client";
import type {HelloResponse} from "~/.proto/HelloResponse";
import type {TitleResponse} from "~/.proto/TitleResponse";

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
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const config = useRuntimeConfig()
    const grpcUrl = config.public.grpcUrl as string
    const protoDir = join(__dirname, '../../../proto/');

    // proto 디렉토리에서 .proto 파일 목록을 동적으로 읽어옴
    const protoFiles = fs.readdirSync(protoDir)
    .filter(file => file.endsWith('.proto'));

    for (const protoFile of protoFiles) {
      const protoName = protoFile.replace('.proto', ''); // 'Hello.proto' -> 'Hello'
      const PROTO_PATH = join(protoDir, protoFile);

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

  async sayHello(name: string): Promise<HelloResponse> {
    return new Promise((resolve, reject) => {
      this.services.get('Hello')?.sayHello({name}, (err: any, response: HelloResponse) => {
        if (err) {
          reject()
        } else {
          resolve(response)
        }
      })
    })
  }

  async getTitle(): Promise<TitleResponse> {
    return new Promise((resolve, reject) => {
      this.services.get('Title')?.getTitle({}, (err: any, response: TitleResponse) => {
        if (err) {
          reject()
        } else {
          resolve(response)
        }
      })
    })
  }
}