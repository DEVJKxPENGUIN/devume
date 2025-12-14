// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var Blog_pb = require('./Blog_pb.js');

function serialize_BlogRequest(arg) {
  if (!(arg instanceof Blog_pb.BlogRequest)) {
    throw new Error('Expected argument of type BlogRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_BlogRequest(buffer_arg) {
  return Blog_pb.BlogRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_BlogResponse(arg) {
  if (!(arg instanceof Blog_pb.BlogResponse)) {
    throw new Error('Expected argument of type BlogResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_BlogResponse(buffer_arg) {
  return Blog_pb.BlogResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_PreparePostRequest(arg) {
  if (!(arg instanceof Blog_pb.PreparePostRequest)) {
    throw new Error('Expected argument of type PreparePostRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_PreparePostRequest(buffer_arg) {
  return Blog_pb.PreparePostRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_PreparePostResponse(arg) {
  if (!(arg instanceof Blog_pb.PreparePostResponse)) {
    throw new Error('Expected argument of type PreparePostResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_PreparePostResponse(buffer_arg) {
  return Blog_pb.PreparePostResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var BlogService = exports.BlogService = {
  getBlogs: {
    path: '/Blog/GetBlogs',
    requestStream: false,
    responseStream: false,
    requestType: Blog_pb.BlogRequest,
    responseType: Blog_pb.BlogResponse,
    requestSerialize: serialize_BlogRequest,
    requestDeserialize: deserialize_BlogRequest,
    responseSerialize: serialize_BlogResponse,
    responseDeserialize: deserialize_BlogResponse,
  },
  preparePost: {
    path: '/Blog/PreparePost',
    requestStream: false,
    responseStream: false,
    requestType: Blog_pb.PreparePostRequest,
    responseType: Blog_pb.PreparePostResponse,
    requestSerialize: serialize_PreparePostRequest,
    requestDeserialize: deserialize_PreparePostRequest,
    responseSerialize: serialize_PreparePostResponse,
    responseDeserialize: deserialize_PreparePostResponse,
  },
};

exports.BlogClient = grpc.makeGenericClientConstructor(BlogService, 'Blog');
