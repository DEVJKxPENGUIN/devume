// package: 
// file: Hello.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as Hello_pb from "./Hello_pb";

interface IHelloService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    sayHello: IHelloService_ISayHello;
    streamHello: IHelloService_IStreamHello;
}

interface IHelloService_ISayHello extends grpc.MethodDefinition<Hello_pb.HelloRequest, Hello_pb.HelloResponse> {
    path: "/Hello/SayHello";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<Hello_pb.HelloRequest>;
    requestDeserialize: grpc.deserialize<Hello_pb.HelloRequest>;
    responseSerialize: grpc.serialize<Hello_pb.HelloResponse>;
    responseDeserialize: grpc.deserialize<Hello_pb.HelloResponse>;
}
interface IHelloService_IStreamHello extends grpc.MethodDefinition<Hello_pb.HelloRequest, Hello_pb.HelloResponse> {
    path: "/Hello/StreamHello";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<Hello_pb.HelloRequest>;
    requestDeserialize: grpc.deserialize<Hello_pb.HelloRequest>;
    responseSerialize: grpc.serialize<Hello_pb.HelloResponse>;
    responseDeserialize: grpc.deserialize<Hello_pb.HelloResponse>;
}

export const HelloService: IHelloService;

export interface IHelloServer extends grpc.UntypedServiceImplementation {
    sayHello: grpc.handleUnaryCall<Hello_pb.HelloRequest, Hello_pb.HelloResponse>;
    streamHello: grpc.handleServerStreamingCall<Hello_pb.HelloRequest, Hello_pb.HelloResponse>;
}

export interface IHelloClient {
    sayHello(request: Hello_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: Hello_pb.HelloResponse) => void): grpc.ClientUnaryCall;
    sayHello(request: Hello_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: Hello_pb.HelloResponse) => void): grpc.ClientUnaryCall;
    sayHello(request: Hello_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: Hello_pb.HelloResponse) => void): grpc.ClientUnaryCall;
    streamHello(request: Hello_pb.HelloRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<Hello_pb.HelloResponse>;
    streamHello(request: Hello_pb.HelloRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<Hello_pb.HelloResponse>;
}

export class HelloClient extends grpc.Client implements IHelloClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public sayHello(request: Hello_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: Hello_pb.HelloResponse) => void): grpc.ClientUnaryCall;
    public sayHello(request: Hello_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: Hello_pb.HelloResponse) => void): grpc.ClientUnaryCall;
    public sayHello(request: Hello_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: Hello_pb.HelloResponse) => void): grpc.ClientUnaryCall;
    public streamHello(request: Hello_pb.HelloRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<Hello_pb.HelloResponse>;
    public streamHello(request: Hello_pb.HelloRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<Hello_pb.HelloResponse>;
}
