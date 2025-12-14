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

function serialize_ValidationRequest(arg) {
  if (!(arg instanceof Blog_pb.ValidationRequest)) {
    throw new Error('Expected argument of type ValidationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ValidationRequest(buffer_arg) {
  return Blog_pb.ValidationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ValidationResponse(arg) {
  if (!(arg instanceof Blog_pb.ValidationResponse)) {
    throw new Error('Expected argument of type ValidationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ValidationResponse(buffer_arg) {
  return Blog_pb.ValidationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WriteRequest(arg) {
  if (!(arg instanceof Blog_pb.WriteRequest)) {
    throw new Error('Expected argument of type WriteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_WriteRequest(buffer_arg) {
  return Blog_pb.WriteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WriteResponse(arg) {
  if (!(arg instanceof Blog_pb.WriteResponse)) {
    throw new Error('Expected argument of type WriteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_WriteResponse(buffer_arg) {
  return Blog_pb.WriteResponse.deserializeBinary(new Uint8Array(buffer_arg));
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
  validate: {
    path: '/Blog/Validate',
    requestStream: false,
    responseStream: false,
    requestType: Blog_pb.ValidationRequest,
    responseType: Blog_pb.ValidationResponse,
    requestSerialize: serialize_ValidationRequest,
    requestDeserialize: deserialize_ValidationRequest,
    responseSerialize: serialize_ValidationResponse,
    responseDeserialize: deserialize_ValidationResponse,
  },
  write: {
    path: '/Blog/Write',
    requestStream: false,
    responseStream: false,
    requestType: Blog_pb.WriteRequest,
    responseType: Blog_pb.WriteResponse,
    requestSerialize: serialize_WriteRequest,
    requestDeserialize: deserialize_WriteRequest,
    responseSerialize: serialize_WriteResponse,
    responseDeserialize: deserialize_WriteResponse,
  },
};

exports.BlogClient = grpc.makeGenericClientConstructor(BlogService, 'Blog');
