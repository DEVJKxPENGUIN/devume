// package: 
// file: Portfolio.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as Portfolio_pb from "./Portfolio_pb";

interface IPortfolioService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getPortfolios: IPortfolioService_IGetPortfolios;
}

interface IPortfolioService_IGetPortfolios extends grpc.MethodDefinition<Portfolio_pb.PortfolioRequest, Portfolio_pb.PortfolioResponse> {
    path: "/Portfolio/GetPortfolios";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<Portfolio_pb.PortfolioRequest>;
    requestDeserialize: grpc.deserialize<Portfolio_pb.PortfolioRequest>;
    responseSerialize: grpc.serialize<Portfolio_pb.PortfolioResponse>;
    responseDeserialize: grpc.deserialize<Portfolio_pb.PortfolioResponse>;
}

export const PortfolioService: IPortfolioService;

export interface IPortfolioServer extends grpc.UntypedServiceImplementation {
    getPortfolios: grpc.handleUnaryCall<Portfolio_pb.PortfolioRequest, Portfolio_pb.PortfolioResponse>;
}

export interface IPortfolioClient {
    getPortfolios(request: Portfolio_pb.PortfolioRequest, callback: (error: grpc.ServiceError | null, response: Portfolio_pb.PortfolioResponse) => void): grpc.ClientUnaryCall;
    getPortfolios(request: Portfolio_pb.PortfolioRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: Portfolio_pb.PortfolioResponse) => void): grpc.ClientUnaryCall;
    getPortfolios(request: Portfolio_pb.PortfolioRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: Portfolio_pb.PortfolioResponse) => void): grpc.ClientUnaryCall;
}

export class PortfolioClient extends grpc.Client implements IPortfolioClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getPortfolios(request: Portfolio_pb.PortfolioRequest, callback: (error: grpc.ServiceError | null, response: Portfolio_pb.PortfolioResponse) => void): grpc.ClientUnaryCall;
    public getPortfolios(request: Portfolio_pb.PortfolioRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: Portfolio_pb.PortfolioResponse) => void): grpc.ClientUnaryCall;
    public getPortfolios(request: Portfolio_pb.PortfolioRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: Portfolio_pb.PortfolioResponse) => void): grpc.ClientUnaryCall;
}
