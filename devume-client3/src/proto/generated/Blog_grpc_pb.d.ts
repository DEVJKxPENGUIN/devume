// package: 
// file: Blog.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as Blog_pb from "./Blog_pb";

interface IBlogService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getBlogs: IBlogService_IGetBlogs;
    preparePost: IBlogService_IPreparePost;
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

export const BlogService: IBlogService;

export interface IBlogServer extends grpc.UntypedServiceImplementation {
    getBlogs: grpc.handleUnaryCall<Blog_pb.BlogRequest, Blog_pb.BlogResponse>;
    preparePost: grpc.handleUnaryCall<Blog_pb.PreparePostRequest, Blog_pb.PreparePostResponse>;
}

export interface IBlogClient {
    getBlogs(request: Blog_pb.BlogRequest, callback: (error: grpc.ServiceError | null, response: Blog_pb.BlogResponse) => void): grpc.ClientUnaryCall;
    getBlogs(request: Blog_pb.BlogRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: Blog_pb.BlogResponse) => void): grpc.ClientUnaryCall;
    getBlogs(request: Blog_pb.BlogRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: Blog_pb.BlogResponse) => void): grpc.ClientUnaryCall;
    preparePost(request: Blog_pb.PreparePostRequest, callback: (error: grpc.ServiceError | null, response: Blog_pb.PreparePostResponse) => void): grpc.ClientUnaryCall;
    preparePost(request: Blog_pb.PreparePostRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: Blog_pb.PreparePostResponse) => void): grpc.ClientUnaryCall;
    preparePost(request: Blog_pb.PreparePostRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: Blog_pb.PreparePostResponse) => void): grpc.ClientUnaryCall;
}

export class BlogClient extends grpc.Client implements IBlogClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getBlogs(request: Blog_pb.BlogRequest, callback: (error: grpc.ServiceError | null, response: Blog_pb.BlogResponse) => void): grpc.ClientUnaryCall;
    public getBlogs(request: Blog_pb.BlogRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: Blog_pb.BlogResponse) => void): grpc.ClientUnaryCall;
    public getBlogs(request: Blog_pb.BlogRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: Blog_pb.BlogResponse) => void): grpc.ClientUnaryCall;
    public preparePost(request: Blog_pb.PreparePostRequest, callback: (error: grpc.ServiceError | null, response: Blog_pb.PreparePostResponse) => void): grpc.ClientUnaryCall;
    public preparePost(request: Blog_pb.PreparePostRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: Blog_pb.PreparePostResponse) => void): grpc.ClientUnaryCall;
    public preparePost(request: Blog_pb.PreparePostRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: Blog_pb.PreparePostResponse) => void): grpc.ClientUnaryCall;
}
