// package: 
// file: Blog.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as Blog_pb from "./Blog_pb";

interface IBlogService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getBlogs: IBlogService_IGetBlogs;
    preparePost: IBlogService_IPreparePost;
    validate: IBlogService_Ivalidate;
    write: IBlogService_Iwrite;
}

interface IBlogService_IGetBlogs extends grpc.MethodDefinition<Blog_pb.BlogRequest, Blog_pb.BlogResponse> {
    path: "/Blog/GetBlogs";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<Blog_pb.BlogRequest>;
    requestDeserialize: grpc.deserialize<Blog_pb.BlogRequest>;
    responseSerialize: grpc.serialize<Blog_pb.BlogResponse>;
    responseDeserialize: grpc.deserialize<Blog_pb.BlogResponse>;
}
interface IBlogService_IPreparePost extends grpc.MethodDefinition<Blog_pb.PreparePostRequest, Blog_pb.PreparePostResponse> {
    path: "/Blog/PreparePost";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<Blog_pb.PreparePostRequest>;
    requestDeserialize: grpc.deserialize<Blog_pb.PreparePostRequest>;
    responseSerialize: grpc.serialize<Blog_pb.PreparePostResponse>;
    responseDeserialize: grpc.deserialize<Blog_pb.PreparePostResponse>;
}
interface IBlogService_Ivalidate extends grpc.MethodDefinition<Blog_pb.ValidationRequest, Blog_pb.ValidationResponse> {
    path: "/Blog/validate";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<Blog_pb.ValidationRequest>;
    requestDeserialize: grpc.deserialize<Blog_pb.ValidationRequest>;
    responseSerialize: grpc.serialize<Blog_pb.ValidationResponse>;
    responseDeserialize: grpc.deserialize<Blog_pb.ValidationResponse>;
}
interface IBlogService_Iwrite extends grpc.MethodDefinition<Blog_pb.WriteRequest, Blog_pb.WriteResponse> {
    path: "/Blog/write";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<Blog_pb.WriteRequest>;
    requestDeserialize: grpc.deserialize<Blog_pb.WriteRequest>;
    responseSerialize: grpc.serialize<Blog_pb.WriteResponse>;
    responseDeserialize: grpc.deserialize<Blog_pb.WriteResponse>;
}

export const BlogService: IBlogService;

export interface IBlogServer extends grpc.UntypedServiceImplementation {
    getBlogs: grpc.handleUnaryCall<Blog_pb.BlogRequest, Blog_pb.BlogResponse>;
    preparePost: grpc.handleUnaryCall<Blog_pb.PreparePostRequest, Blog_pb.PreparePostResponse>;
    validate: grpc.handleUnaryCall<Blog_pb.ValidationRequest, Blog_pb.ValidationResponse>;
    write: grpc.handleUnaryCall<Blog_pb.WriteRequest, Blog_pb.WriteResponse>;
}

export interface IBlogClient {
    getBlogs(request: Blog_pb.BlogRequest, callback: (error: grpc.ServiceError | null, response: Blog_pb.BlogResponse) => void): grpc.ClientUnaryCall;
    getBlogs(request: Blog_pb.BlogRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: Blog_pb.BlogResponse) => void): grpc.ClientUnaryCall;
    getBlogs(request: Blog_pb.BlogRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: Blog_pb.BlogResponse) => void): grpc.ClientUnaryCall;
    preparePost(request: Blog_pb.PreparePostRequest, callback: (error: grpc.ServiceError | null, response: Blog_pb.PreparePostResponse) => void): grpc.ClientUnaryCall;
    preparePost(request: Blog_pb.PreparePostRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: Blog_pb.PreparePostResponse) => void): grpc.ClientUnaryCall;
    preparePost(request: Blog_pb.PreparePostRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: Blog_pb.PreparePostResponse) => void): grpc.ClientUnaryCall;
    validate(request: Blog_pb.ValidationRequest, callback: (error: grpc.ServiceError | null, response: Blog_pb.ValidationResponse) => void): grpc.ClientUnaryCall;
    validate(request: Blog_pb.ValidationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: Blog_pb.ValidationResponse) => void): grpc.ClientUnaryCall;
    validate(request: Blog_pb.ValidationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: Blog_pb.ValidationResponse) => void): grpc.ClientUnaryCall;
    write(request: Blog_pb.WriteRequest, callback: (error: grpc.ServiceError | null, response: Blog_pb.WriteResponse) => void): grpc.ClientUnaryCall;
    write(request: Blog_pb.WriteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: Blog_pb.WriteResponse) => void): grpc.ClientUnaryCall;
    write(request: Blog_pb.WriteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: Blog_pb.WriteResponse) => void): grpc.ClientUnaryCall;
}

export class BlogClient extends grpc.Client implements IBlogClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getBlogs(request: Blog_pb.BlogRequest, callback: (error: grpc.ServiceError | null, response: Blog_pb.BlogResponse) => void): grpc.ClientUnaryCall;
    public getBlogs(request: Blog_pb.BlogRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: Blog_pb.BlogResponse) => void): grpc.ClientUnaryCall;
    public getBlogs(request: Blog_pb.BlogRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: Blog_pb.BlogResponse) => void): grpc.ClientUnaryCall;
    public preparePost(request: Blog_pb.PreparePostRequest, callback: (error: grpc.ServiceError | null, response: Blog_pb.PreparePostResponse) => void): grpc.ClientUnaryCall;
    public preparePost(request: Blog_pb.PreparePostRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: Blog_pb.PreparePostResponse) => void): grpc.ClientUnaryCall;
    public preparePost(request: Blog_pb.PreparePostRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: Blog_pb.PreparePostResponse) => void): grpc.ClientUnaryCall;
    public validate(request: Blog_pb.ValidationRequest, callback: (error: grpc.ServiceError | null, response: Blog_pb.ValidationResponse) => void): grpc.ClientUnaryCall;
    public validate(request: Blog_pb.ValidationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: Blog_pb.ValidationResponse) => void): grpc.ClientUnaryCall;
    public validate(request: Blog_pb.ValidationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: Blog_pb.ValidationResponse) => void): grpc.ClientUnaryCall;
    public write(request: Blog_pb.WriteRequest, callback: (error: grpc.ServiceError | null, response: Blog_pb.WriteResponse) => void): grpc.ClientUnaryCall;
    public write(request: Blog_pb.WriteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: Blog_pb.WriteResponse) => void): grpc.ClientUnaryCall;
    public write(request: Blog_pb.WriteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: Blog_pb.WriteResponse) => void): grpc.ClientUnaryCall;
}
