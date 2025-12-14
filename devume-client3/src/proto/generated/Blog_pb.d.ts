// package: 
// file: Blog.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class BlogRequest extends jspb.Message { 
    getCount(): number;
    setCount(value: number): BlogRequest;

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
        count: number,
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
    }
}

export class BlogResponse extends jspb.Message { 
    clearBlogsList(): void;
    getBlogsList(): Array<BlogContent>;
    setBlogsList(value: Array<BlogContent>): BlogResponse;
    addBlogs(value?: BlogContent, index?: number): BlogContent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BlogResponse.AsObject;
    static toObject(includeInstance: boolean, msg: BlogResponse): BlogResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BlogResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BlogResponse;
    static deserializeBinaryFromReader(message: BlogResponse, reader: jspb.BinaryReader): BlogResponse;
}

export namespace BlogResponse {
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
