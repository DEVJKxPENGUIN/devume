import type {ServiceClientConstructor} from '@grpc/grpc-js';
import grpc from '@grpc/grpc-js';
import protoLoader from '@grpc/proto-loader';
import {fileURLToPath} from 'url';
import {dirname, join} from 'path';
import type {ServiceClient} from "@grpc/grpc-js/build/src/make-client";
import type {HelloResponse} from "~/.proto/HelloResponse";

export default class GrpcHandler {
  private static instance: GrpcHandler | null = null
  private protoNames = [
    'Hello'
  ]
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

    for (const protoName of this.protoNames) {
      const PROTO_PATH = join(__dirname, `../../../proto/${protoName}.proto`);
      const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true
      })

      const protoDescriptor = grpc.loadPackageDefinition(packageDefinition)
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
}