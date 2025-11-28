// package: 
// file: User.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as User_pb from "./User_pb";

interface IUserService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getUser: IUserService_IGetUser;
}

interface IUserService_IGetUser extends grpc.MethodDefinition<User_pb.UserRequest, User_pb.UserResponse> {
    path: "/User/GetUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<User_pb.UserRequest>;
    requestDeserialize: grpc.deserialize<User_pb.UserRequest>;
    responseSerialize: grpc.serialize<User_pb.UserResponse>;
    responseDeserialize: grpc.deserialize<User_pb.UserResponse>;
}

export const UserService: IUserService;

export interface IUserServer extends grpc.UntypedServiceImplementation {
    getUser: grpc.handleUnaryCall<User_pb.UserRequest, User_pb.UserResponse>;
}

export interface IUserClient {
    getUser(request: User_pb.UserRequest, callback: (error: grpc.ServiceError | null, response: User_pb.UserResponse) => void): grpc.ClientUnaryCall;
    getUser(request: User_pb.UserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: User_pb.UserResponse) => void): grpc.ClientUnaryCall;
    getUser(request: User_pb.UserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: User_pb.UserResponse) => void): grpc.ClientUnaryCall;
}

export class UserClient extends grpc.Client implements IUserClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getUser(request: User_pb.UserRequest, callback: (error: grpc.ServiceError | null, response: User_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public getUser(request: User_pb.UserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: User_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public getUser(request: User_pb.UserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: User_pb.UserResponse) => void): grpc.ClientUnaryCall;
}
