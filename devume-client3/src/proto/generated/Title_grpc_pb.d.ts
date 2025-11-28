// package: 
// file: Title.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as Title_pb from "./Title_pb";

interface ITitleService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getTitle: ITitleService_IGetTitle;
}

interface ITitleService_IGetTitle extends grpc.MethodDefinition<Title_pb.TitleRequest, Title_pb.TitleResponse> {
    path: "/Title/GetTitle";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<Title_pb.TitleRequest>;
    requestDeserialize: grpc.deserialize<Title_pb.TitleRequest>;
    responseSerialize: grpc.serialize<Title_pb.TitleResponse>;
    responseDeserialize: grpc.deserialize<Title_pb.TitleResponse>;
}

export const TitleService: ITitleService;

export interface ITitleServer extends grpc.UntypedServiceImplementation {
    getTitle: grpc.handleUnaryCall<Title_pb.TitleRequest, Title_pb.TitleResponse>;
}

export interface ITitleClient {
    getTitle(request: Title_pb.TitleRequest, callback: (error: grpc.ServiceError | null, response: Title_pb.TitleResponse) => void): grpc.ClientUnaryCall;
    getTitle(request: Title_pb.TitleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: Title_pb.TitleResponse) => void): grpc.ClientUnaryCall;
    getTitle(request: Title_pb.TitleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: Title_pb.TitleResponse) => void): grpc.ClientUnaryCall;
}

export class TitleClient extends grpc.Client implements ITitleClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getTitle(request: Title_pb.TitleRequest, callback: (error: grpc.ServiceError | null, response: Title_pb.TitleResponse) => void): grpc.ClientUnaryCall;
    public getTitle(request: Title_pb.TitleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: Title_pb.TitleResponse) => void): grpc.ClientUnaryCall;
    public getTitle(request: Title_pb.TitleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: Title_pb.TitleResponse) => void): grpc.ClientUnaryCall;
}
