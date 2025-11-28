// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var Hello_pb = require('./Hello_pb.js');

function serialize_HelloRequest(arg) {
  if (!(arg instanceof Hello_pb.HelloRequest)) {
    throw new Error('Expected argument of type HelloRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_HelloRequest(buffer_arg) {
  return Hello_pb.HelloRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_HelloResponse(arg) {
  if (!(arg instanceof Hello_pb.HelloResponse)) {
    throw new Error('Expected argument of type HelloResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_HelloResponse(buffer_arg) {
  return Hello_pb.HelloResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var HelloService = exports.HelloService = {
  sayHello: {
    path: '/Hello/SayHello',
    requestStream: false,
    responseStream: false,
    requestType: Hello_pb.HelloRequest,
    responseType: Hello_pb.HelloResponse,
    requestSerialize: serialize_HelloRequest,
    requestDeserialize: deserialize_HelloRequest,
    responseSerialize: serialize_HelloResponse,
    responseDeserialize: deserialize_HelloResponse,
  },
  streamHello: {
    path: '/Hello/StreamHello',
    requestStream: false,
    responseStream: true,
    requestType: Hello_pb.HelloRequest,
    responseType: Hello_pb.HelloResponse,
    requestSerialize: serialize_HelloRequest,
    requestDeserialize: deserialize_HelloRequest,
    responseSerialize: serialize_HelloResponse,
    responseDeserialize: deserialize_HelloResponse,
  },
};

exports.HelloClient = grpc.makeGenericClientConstructor(HelloService, 'Hello');
