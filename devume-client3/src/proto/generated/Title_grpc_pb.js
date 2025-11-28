// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var Title_pb = require('./Title_pb.js');

function serialize_TitleRequest(arg) {
  if (!(arg instanceof Title_pb.TitleRequest)) {
    throw new Error('Expected argument of type TitleRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_TitleRequest(buffer_arg) {
  return Title_pb.TitleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_TitleResponse(arg) {
  if (!(arg instanceof Title_pb.TitleResponse)) {
    throw new Error('Expected argument of type TitleResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_TitleResponse(buffer_arg) {
  return Title_pb.TitleResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var TitleService = exports.TitleService = {
  getTitle: {
    path: '/Title/GetTitle',
    requestStream: false,
    responseStream: false,
    requestType: Title_pb.TitleRequest,
    responseType: Title_pb.TitleResponse,
    requestSerialize: serialize_TitleRequest,
    requestDeserialize: deserialize_TitleRequest,
    responseSerialize: serialize_TitleResponse,
    responseDeserialize: deserialize_TitleResponse,
  },
};

exports.TitleClient = grpc.makeGenericClientConstructor(TitleService, 'Title');
