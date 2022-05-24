/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../booktrans/params";
import { NewBook } from "../booktrans/new_book";
import { StoredBook } from "../booktrans/stored_book";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";

export const protobufPackage = "daitarus.booktrans.booktrans";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetNewBookRequest {}

export interface QueryGetNewBookResponse {
  NewBook: NewBook | undefined;
}

export interface QueryGetStoredBookRequest {
  index: string;
}

export interface QueryGetStoredBookResponse {
  storedBook: StoredBook | undefined;
}

export interface QueryAllStoredBookRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllStoredBookResponse {
  storedBook: StoredBook[];
  pagination: PageResponse | undefined;
}

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryGetNewBookRequest: object = {};

export const QueryGetNewBookRequest = {
  encode(_: QueryGetNewBookRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetNewBookRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetNewBookRequest } as QueryGetNewBookRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryGetNewBookRequest {
    const message = { ...baseQueryGetNewBookRequest } as QueryGetNewBookRequest;
    return message;
  },

  toJSON(_: QueryGetNewBookRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryGetNewBookRequest>): QueryGetNewBookRequest {
    const message = { ...baseQueryGetNewBookRequest } as QueryGetNewBookRequest;
    return message;
  },
};

const baseQueryGetNewBookResponse: object = {};

export const QueryGetNewBookResponse = {
  encode(
    message: QueryGetNewBookResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.NewBook !== undefined) {
      NewBook.encode(message.NewBook, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetNewBookResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetNewBookResponse,
    } as QueryGetNewBookResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.NewBook = NewBook.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetNewBookResponse {
    const message = {
      ...baseQueryGetNewBookResponse,
    } as QueryGetNewBookResponse;
    if (object.NewBook !== undefined && object.NewBook !== null) {
      message.NewBook = NewBook.fromJSON(object.NewBook);
    } else {
      message.NewBook = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetNewBookResponse): unknown {
    const obj: any = {};
    message.NewBook !== undefined &&
      (obj.NewBook = message.NewBook
        ? NewBook.toJSON(message.NewBook)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetNewBookResponse>
  ): QueryGetNewBookResponse {
    const message = {
      ...baseQueryGetNewBookResponse,
    } as QueryGetNewBookResponse;
    if (object.NewBook !== undefined && object.NewBook !== null) {
      message.NewBook = NewBook.fromPartial(object.NewBook);
    } else {
      message.NewBook = undefined;
    }
    return message;
  },
};

const baseQueryGetStoredBookRequest: object = { index: "" };

export const QueryGetStoredBookRequest = {
  encode(
    message: QueryGetStoredBookRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetStoredBookRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetStoredBookRequest,
    } as QueryGetStoredBookRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetStoredBookRequest {
    const message = {
      ...baseQueryGetStoredBookRequest,
    } as QueryGetStoredBookRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: QueryGetStoredBookRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetStoredBookRequest>
  ): QueryGetStoredBookRequest {
    const message = {
      ...baseQueryGetStoredBookRequest,
    } as QueryGetStoredBookRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseQueryGetStoredBookResponse: object = {};

export const QueryGetStoredBookResponse = {
  encode(
    message: QueryGetStoredBookResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.storedBook !== undefined) {
      StoredBook.encode(message.storedBook, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetStoredBookResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetStoredBookResponse,
    } as QueryGetStoredBookResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.storedBook = StoredBook.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetStoredBookResponse {
    const message = {
      ...baseQueryGetStoredBookResponse,
    } as QueryGetStoredBookResponse;
    if (object.storedBook !== undefined && object.storedBook !== null) {
      message.storedBook = StoredBook.fromJSON(object.storedBook);
    } else {
      message.storedBook = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetStoredBookResponse): unknown {
    const obj: any = {};
    message.storedBook !== undefined &&
      (obj.storedBook = message.storedBook
        ? StoredBook.toJSON(message.storedBook)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetStoredBookResponse>
  ): QueryGetStoredBookResponse {
    const message = {
      ...baseQueryGetStoredBookResponse,
    } as QueryGetStoredBookResponse;
    if (object.storedBook !== undefined && object.storedBook !== null) {
      message.storedBook = StoredBook.fromPartial(object.storedBook);
    } else {
      message.storedBook = undefined;
    }
    return message;
  },
};

const baseQueryAllStoredBookRequest: object = {};

export const QueryAllStoredBookRequest = {
  encode(
    message: QueryAllStoredBookRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllStoredBookRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllStoredBookRequest,
    } as QueryAllStoredBookRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllStoredBookRequest {
    const message = {
      ...baseQueryAllStoredBookRequest,
    } as QueryAllStoredBookRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllStoredBookRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllStoredBookRequest>
  ): QueryAllStoredBookRequest {
    const message = {
      ...baseQueryAllStoredBookRequest,
    } as QueryAllStoredBookRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllStoredBookResponse: object = {};

export const QueryAllStoredBookResponse = {
  encode(
    message: QueryAllStoredBookResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.storedBook) {
      StoredBook.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllStoredBookResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllStoredBookResponse,
    } as QueryAllStoredBookResponse;
    message.storedBook = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.storedBook.push(StoredBook.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllStoredBookResponse {
    const message = {
      ...baseQueryAllStoredBookResponse,
    } as QueryAllStoredBookResponse;
    message.storedBook = [];
    if (object.storedBook !== undefined && object.storedBook !== null) {
      for (const e of object.storedBook) {
        message.storedBook.push(StoredBook.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllStoredBookResponse): unknown {
    const obj: any = {};
    if (message.storedBook) {
      obj.storedBook = message.storedBook.map((e) =>
        e ? StoredBook.toJSON(e) : undefined
      );
    } else {
      obj.storedBook = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllStoredBookResponse>
  ): QueryAllStoredBookResponse {
    const message = {
      ...baseQueryAllStoredBookResponse,
    } as QueryAllStoredBookResponse;
    message.storedBook = [];
    if (object.storedBook !== undefined && object.storedBook !== null) {
      for (const e of object.storedBook) {
        message.storedBook.push(StoredBook.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a NewBook by index. */
  NewBook(request: QueryGetNewBookRequest): Promise<QueryGetNewBookResponse>;
  /** Queries a StoredBook by index. */
  StoredBook(
    request: QueryGetStoredBookRequest
  ): Promise<QueryGetStoredBookResponse>;
  /** Queries a list of StoredBook items. */
  StoredBookAll(
    request: QueryAllStoredBookRequest
  ): Promise<QueryAllStoredBookResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "daitarus.booktrans.booktrans.Query",
      "Params",
      data
    );
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  NewBook(request: QueryGetNewBookRequest): Promise<QueryGetNewBookResponse> {
    const data = QueryGetNewBookRequest.encode(request).finish();
    const promise = this.rpc.request(
      "daitarus.booktrans.booktrans.Query",
      "NewBook",
      data
    );
    return promise.then((data) =>
      QueryGetNewBookResponse.decode(new Reader(data))
    );
  }

  StoredBook(
    request: QueryGetStoredBookRequest
  ): Promise<QueryGetStoredBookResponse> {
    const data = QueryGetStoredBookRequest.encode(request).finish();
    const promise = this.rpc.request(
      "daitarus.booktrans.booktrans.Query",
      "StoredBook",
      data
    );
    return promise.then((data) =>
      QueryGetStoredBookResponse.decode(new Reader(data))
    );
  }

  StoredBookAll(
    request: QueryAllStoredBookRequest
  ): Promise<QueryAllStoredBookResponse> {
    const data = QueryAllStoredBookRequest.encode(request).finish();
    const promise = this.rpc.request(
      "daitarus.booktrans.booktrans.Query",
      "StoredBookAll",
      data
    );
    return promise.then((data) =>
      QueryAllStoredBookResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
