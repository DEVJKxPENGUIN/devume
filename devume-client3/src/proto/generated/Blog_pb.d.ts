// package: 
// file: Blog.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class BlogListRequest extends jspb.Message { 
    getCount(): number;
    setCount(value: number): BlogListRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BlogListRequest.AsObject;
    static toObject(includeInstance: boolean, msg: BlogListRequest): BlogListRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BlogListRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BlogListRequest;
    static deserializeBinaryFromReader(message: BlogListRequest, reader: jspb.BinaryReader): BlogListRequest;
}

export namespace BlogListRequest {
    export type AsObject = {
        count: number,
    }
}

export class BlogRequest extends jspb.Message { 
    getPostid(): number;
    setPostid(value: number): BlogRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BlogRequest.AsObject;
    static toObject(includeInstance: boolean, msg: BlogRequest): BlogRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BlogRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BlogRequest;
    static deserializeBinaryFromReader(message: BlogRequest, reader: jspb.BinaryReader): BlogRequest;
}

export namespace BlogRequest {
    export type AsObject = {
        postid: number,
    }
}

export class BlogContent extends jspb.Message { 
    getId(): string;
    setId(value: string): BlogContent;
    getTitle(): string;
    setTitle(value: string): BlogContent;
    getSummary(): string;
    setSummary(value: string): BlogContent;
    getContents(): string;
    setContents(value: string): BlogContent;
    getAuthor(): string;
    setAuthor(value: string): BlogContent;
    getThumbnail(): string;
    setThumbnail(value: string): BlogContent;
    getThumbs(): number;
    setThumbs(value: number): BlogContent;
    getViews(): number;
    setViews(value: number): BlogContent;
    getUserid(): number;
    setUserid(value: number): BlogContent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BlogContent.AsObject;
    static toObject(includeInstance: boolean, msg: BlogContent): BlogContent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BlogContent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BlogContent;
    static deserializeBinaryFromReader(message: BlogContent, reader: jspb.BinaryReader): BlogContent;
}

export namespace BlogContent {
    export type AsObject = {
        id: string,
        title: string,
        summary: string,
        contents: string,
        author: string,
        thumbnail: string,
        thumbs: number,
        views: number,
        userid: number,
    }
}

export class BlogListResponse extends jspb.Message { 
    clearBlogsList(): void;
    getBlogsList(): Array<BlogContent>;
    setBlogsList(value: Array<BlogContent>): BlogListResponse;
    addBlogs(value?: BlogContent, index?: number): BlogContent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BlogListResponse.AsObject;
    static toObject(includeInstance: boolean, msg: BlogListResponse): BlogListResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BlogListResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BlogListResponse;
    static deserializeBinaryFromReader(message: BlogListResponse, reader: jspb.BinaryReader): BlogListResponse;
}

export namespace BlogListResponse {
    export type AsObject = {
        blogsList: Array<BlogContent.AsObject>,
    }
}

export class PreparePostRequest extends jspb.Message { 

    hasPostid(): boolean;
    clearPostid(): void;
    getPostid(): number | undefined;
    setPostid(value: number): PreparePostRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PreparePostRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PreparePostRequest): PreparePostRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PreparePostRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PreparePostRequest;
    static deserializeBinaryFromReader(message: PreparePostRequest, reader: jspb.BinaryReader): PreparePostRequest;
}

export namespace PreparePostRequest {
    export type AsObject = {
        postid?: number,
    }
}

export class PreparePostResponse extends jspb.Message { 

    hasTitle(): boolean;
    clearTitle(): void;
    getTitle(): string | undefined;
    setTitle(value: string): PreparePostResponse;

    hasContent(): boolean;
    clearContent(): void;
    getContent(): string | undefined;
    setContent(value: string): PreparePostResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PreparePostResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PreparePostResponse): PreparePostResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PreparePostResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PreparePostResponse;
    static deserializeBinaryFromReader(message: PreparePostResponse, reader: jspb.BinaryReader): PreparePostResponse;
}

export namespace PreparePostResponse {
    export type AsObject = {
        title?: string,
        content?: string,
    }
}

export class ValidationRequest extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): ValidationRequest;
    getContents(): string;
    setContents(value: string): ValidationRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValidationRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ValidationRequest): ValidationRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValidationRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValidationRequest;
    static deserializeBinaryFromReader(message: ValidationRequest, reader: jspb.BinaryReader): ValidationRequest;
}

export namespace ValidationRequest {
    export type AsObject = {
        title: string,
        contents: string,
    }
}

export class ValidationResponse extends jspb.Message { 
    getStatus(): number;
    setStatus(value: number): ValidationResponse;
    getMessage(): string;
    setMessage(value: string): ValidationResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValidationResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ValidationResponse): ValidationResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValidationResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValidationResponse;
    static deserializeBinaryFromReader(message: ValidationResponse, reader: jspb.BinaryReader): ValidationResponse;
}

export namespace ValidationResponse {
    export type AsObject = {
        status: number,
        message: string,
    }
}

export class WriteRequest extends jspb.Message { 

    hasPostid(): boolean;
    clearPostid(): void;
    getPostid(): number | undefined;
    setPostid(value: number): WriteRequest;
    getTitle(): string;
    setTitle(value: string): WriteRequest;
    getContents(): string;
    setContents(value: string): WriteRequest;
    getThumbnail(): string;
    setThumbnail(value: string): WriteRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WriteRequest.AsObject;
    static toObject(includeInstance: boolean, msg: WriteRequest): WriteRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WriteRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WriteRequest;
    static deserializeBinaryFromReader(message: WriteRequest, reader: jspb.BinaryReader): WriteRequest;
}

export namespace WriteRequest {
    export type AsObject = {
        postid?: number,
        title: string,
        contents: string,
        thumbnail: string,
    }
}

export class WriteResponse extends jspb.Message { 
    getPostid(): number;
    setPostid(value: number): WriteResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WriteResponse.AsObject;
    static toObject(includeInstance: boolean, msg: WriteResponse): WriteResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WriteResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WriteResponse;
    static deserializeBinaryFromReader(message: WriteResponse, reader: jspb.BinaryReader): WriteResponse;
}

export namespace WriteResponse {
    export type AsObject = {
        postid: number,
    }
}

export class BlogProfileRequest extends jspb.Message { 
    getUserid(): number;
    setUserid(value: number): BlogProfileRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BlogProfileRequest.AsObject;
    static toObject(includeInstance: boolean, msg: BlogProfileRequest): BlogProfileRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BlogProfileRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BlogProfileRequest;
    static deserializeBinaryFromReader(message: BlogProfileRequest, reader: jspb.BinaryReader): BlogProfileRequest;
}

export namespace BlogProfileRequest {
    export type AsObject = {
        userid: number,
    }
}

export class BlogProfileResponse extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): BlogProfileResponse;
    getSummary(): string;
    setSummary(value: string): BlogProfileResponse;
    getThumbnail(): string;
    setThumbnail(value: string): BlogProfileResponse;
    getIntroduce(): string;
    setIntroduce(value: string): BlogProfileResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BlogProfileResponse.AsObject;
    static toObject(includeInstance: boolean, msg: BlogProfileResponse): BlogProfileResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BlogProfileResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BlogProfileResponse;
    static deserializeBinaryFromReader(message: BlogProfileResponse, reader: jspb.BinaryReader): BlogProfileResponse;
}

export namespace BlogProfileResponse {
    export type AsObject = {
        title: string,
        summary: string,
        thumbnail: string,
        introduce: string,
    }
}
