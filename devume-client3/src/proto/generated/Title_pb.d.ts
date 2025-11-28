// package: 
// file: Title.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class TitleRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TitleRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TitleRequest): TitleRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TitleRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TitleRequest;
    static deserializeBinaryFromReader(message: TitleRequest, reader: jspb.BinaryReader): TitleRequest;
}

export namespace TitleRequest {
    export type AsObject = {
    }
}

export class TitleResponse extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): TitleResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TitleResponse.AsObject;
    static toObject(includeInstance: boolean, msg: TitleResponse): TitleResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TitleResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TitleResponse;
    static deserializeBinaryFromReader(message: TitleResponse, reader: jspb.BinaryReader): TitleResponse;
}

export namespace TitleResponse {
    export type AsObject = {
        title: string,
    }
}
