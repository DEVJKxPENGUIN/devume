// package: 
// file: Portfolio.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class PortfolioRequest extends jspb.Message { 
    getCount(): number;
    setCount(value: number): PortfolioRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PortfolioRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PortfolioRequest): PortfolioRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PortfolioRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PortfolioRequest;
    static deserializeBinaryFromReader(message: PortfolioRequest, reader: jspb.BinaryReader): PortfolioRequest;
}

export namespace PortfolioRequest {
    export type AsObject = {
        count: number,
    }
}

export class PortfolioContent extends jspb.Message { 
    getId(): string;
    setId(value: string): PortfolioContent;
    getTitle(): string;
    setTitle(value: string): PortfolioContent;
    getDescription(): string;
    setDescription(value: string): PortfolioContent;
    getAuthor(): string;
    setAuthor(value: string): PortfolioContent;
    getSkills(): string;
    setSkills(value: string): PortfolioContent;
    getJob(): string;
    setJob(value: string): PortfolioContent;
    getLink(): string;
    setLink(value: string): PortfolioContent;
    getProfileimage(): string;
    setProfileimage(value: string): PortfolioContent;
    getThumbs(): number;
    setThumbs(value: number): PortfolioContent;
    getViews(): number;
    setViews(value: number): PortfolioContent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PortfolioContent.AsObject;
    static toObject(includeInstance: boolean, msg: PortfolioContent): PortfolioContent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PortfolioContent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PortfolioContent;
    static deserializeBinaryFromReader(message: PortfolioContent, reader: jspb.BinaryReader): PortfolioContent;
}

export namespace PortfolioContent {
    export type AsObject = {
        id: string,
        title: string,
        description: string,
        author: string,
        skills: string,
        job: string,
        link: string,
        profileimage: string,
        thumbs: number,
        views: number,
    }
}

export class PortfolioResponse extends jspb.Message { 
    clearPortfoliosList(): void;
    getPortfoliosList(): Array<PortfolioContent>;
    setPortfoliosList(value: Array<PortfolioContent>): PortfolioResponse;
    addPortfolios(value?: PortfolioContent, index?: number): PortfolioContent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PortfolioResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PortfolioResponse): PortfolioResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PortfolioResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PortfolioResponse;
    static deserializeBinaryFromReader(message: PortfolioResponse, reader: jspb.BinaryReader): PortfolioResponse;
}

export namespace PortfolioResponse {
    export type AsObject = {
        portfoliosList: Array<PortfolioContent.AsObject>,
    }
}
