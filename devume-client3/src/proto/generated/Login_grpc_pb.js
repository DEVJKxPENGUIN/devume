// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var Login_pb = require('./Login_pb.js');

function serialize_LoginRequest(arg) {
  if (!(arg instanceof Login_pb.LoginRequest)) {
    throw new Error('Expected argument of type LoginRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_LoginRequest(buffer_arg) {
  return Login_pb.LoginRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_LoginResponse(arg) {
  if (!(arg instanceof Login_pb.LoginResponse)) {
    throw new Error('Expected argument of type LoginResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_LoginResponse(buffer_arg) {
  return Login_pb.LoginResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_TokenRequest(arg) {
  if (!(arg instanceof Login_pb.TokenRequest)) {
    throw new Error('Expected argument of type TokenRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_TokenRequest(buffer_arg) {
  return Login_pb.TokenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_TokenResponse(arg) {
  if (!(arg instanceof Login_pb.TokenResponse)) {
    throw new Error('Expected argument of type TokenResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_TokenResponse(buffer_arg) {
  return Login_pb.TokenResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var LoginService = exports.LoginService = {
  login: {
    path: '/Login/Login',
    requestStream: false,
    responseStream: false,
    requestType: Login_pb.LoginRequest,
    responseType: Login_pb.LoginResponse,
    requestSerialize: serialize_LoginRequest,
    requestDeserialize: deserialize_LoginRequest,
    responseSerialize: serialize_LoginResponse,
    responseDeserialize: deserialize_LoginResponse,
  },
  penguinToken: {
    path: '/Login/PenguinToken',
    requestStream: false,
    responseStream: false,
    requestType: Login_pb.TokenRequest,
    responseType: Login_pb.TokenResponse,
    requestSerialize: serialize_TokenRequest,
    requestDeserialize: deserialize_TokenRequest,
    responseSerialize: serialize_TokenResponse,
    responseDeserialize: deserialize_TokenResponse,
  },
};

exports.LoginClient = grpc.makeGenericClientConstructor(LoginService, 'Login');
