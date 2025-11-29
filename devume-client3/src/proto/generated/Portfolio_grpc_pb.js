// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var Portfolio_pb = require('./Portfolio_pb.js');

function serialize_PortfolioRequest(arg) {
  if (!(arg instanceof Portfolio_pb.PortfolioRequest)) {
    throw new Error('Expected argument of type PortfolioRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_PortfolioRequest(buffer_arg) {
  return Portfolio_pb.PortfolioRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_PortfolioResponse(arg) {
  if (!(arg instanceof Portfolio_pb.PortfolioResponse)) {
    throw new Error('Expected argument of type PortfolioResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_PortfolioResponse(buffer_arg) {
  return Portfolio_pb.PortfolioResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var PortfolioService = exports.PortfolioService = {
  getPortfolios: {
    path: '/Portfolio/GetPortfolios',
    requestStream: false,
    responseStream: false,
    requestType: Portfolio_pb.PortfolioRequest,
    responseType: Portfolio_pb.PortfolioResponse,
    requestSerialize: serialize_PortfolioRequest,
    requestDeserialize: deserialize_PortfolioRequest,
    responseSerialize: serialize_PortfolioResponse,
    responseDeserialize: deserialize_PortfolioResponse,
  },
};

exports.PortfolioClient = grpc.makeGenericClientConstructor(PortfolioService, 'Portfolio');
