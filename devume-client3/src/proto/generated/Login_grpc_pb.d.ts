// package: 
// file: Login.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as Login_pb from "./Login_pb";

interface ILoginService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    login: ILoginService_ILogin;
    penguinToken: ILoginService_IPenguinToken;
}

interface ILoginService_ILogin extends grpc.MethodDefinition<Login_pb.LoginRequest, Login_pb.LoginResponse> {
    path: "/Login/Login";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<Login_pb.LoginRequest>;
    requestDeserialize: grpc.deserialize<Login_pb.LoginRequest>;
    responseSerialize: grpc.serialize<Login_pb.LoginResponse>;
    responseDeserialize: grpc.deserialize<Login_pb.LoginResponse>;
}
interface ILoginService_IPenguinToken extends grpc.MethodDefinition<Login_pb.TokenRequest, Login_pb.TokenResponse> {
    path: "/Login/PenguinToken";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<Login_pb.TokenRequest>;
    requestDeserialize: grpc.deserialize<Login_pb.TokenRequest>;
    responseSerialize: grpc.serialize<Login_pb.TokenResponse>;
    responseDeserialize: grpc.deserialize<Login_pb.TokenResponse>;
}

export const LoginService: ILoginService;

export interface ILoginServer extends grpc.UntypedServiceImplementation {
    login: grpc.handleUnaryCall<Login_pb.LoginRequest, Login_pb.LoginResponse>;
    penguinToken: grpc.handleUnaryCall<Login_pb.TokenRequest, Login_pb.TokenResponse>;
}

export interface ILoginClient {
    login(request: Login_pb.LoginRequest, callback: (error: grpc.ServiceError | null, response: Login_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    login(request: Login_pb.LoginRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: Login_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    login(request: Login_pb.LoginRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: Login_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    penguinToken(request: Login_pb.TokenRequest, callback: (error: grpc.ServiceError | null, response: Login_pb.TokenResponse) => void): grpc.ClientUnaryCall;
    penguinToken(request: Login_pb.TokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: Login_pb.TokenResponse) => void): grpc.ClientUnaryCall;
    penguinToken(request: Login_pb.TokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: Login_pb.TokenResponse) => void): grpc.ClientUnaryCall;
}

export class LoginClient extends grpc.Client implements ILoginClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public login(request: Login_pb.LoginRequest, callback: (error: grpc.ServiceError | null, response: Login_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    public login(request: Login_pb.LoginRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: Login_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    public login(request: Login_pb.LoginRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: Login_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    public penguinToken(request: Login_pb.TokenRequest, callback: (error: grpc.ServiceError | null, response: Login_pb.TokenResponse) => void): grpc.ClientUnaryCall;
    public penguinToken(request: Login_pb.TokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: Login_pb.TokenResponse) => void): grpc.ClientUnaryCall;
    public penguinToken(request: Login_pb.TokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: Login_pb.TokenResponse) => void): grpc.ClientUnaryCall;
}
