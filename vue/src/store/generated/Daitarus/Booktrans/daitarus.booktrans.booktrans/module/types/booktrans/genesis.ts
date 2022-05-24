/* eslint-disable */
import { Params } from "../booktrans/params";
import { NewBook } from "../booktrans/new_book";
import { StoredBook } from "../booktrans/stored_book";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "daitarus.booktrans.booktrans";

/** GenesisState defines the booktrans module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  newBook: NewBook | undefined;
  /** this line is used by starport scaffolding # genesis/proto/state */
  storedBookList: StoredBook[];
}

const baseGenesisState: object = {};

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.newBook !== undefined) {
      NewBook.encode(message.newBook, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.storedBookList) {
      StoredBook.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.storedBookList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.newBook = NewBook.decode(reader, reader.uint32());
          break;
        case 3:
          message.storedBookList.push(
            StoredBook.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.storedBookList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    if (object.newBook !== undefined && object.newBook !== null) {
      message.newBook = NewBook.fromJSON(object.newBook);
    } else {
      message.newBook = undefined;
    }
    if (object.storedBookList !== undefined && object.storedBookList !== null) {
      for (const e of object.storedBookList) {
        message.storedBookList.push(StoredBook.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.newBook !== undefined &&
      (obj.newBook = message.newBook
        ? NewBook.toJSON(message.newBook)
        : undefined);
    if (message.storedBookList) {
      obj.storedBookList = message.storedBookList.map((e) =>
        e ? StoredBook.toJSON(e) : undefined
      );
    } else {
      obj.storedBookList = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.storedBookList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    if (object.newBook !== undefined && object.newBook !== null) {
      message.newBook = NewBook.fromPartial(object.newBook);
    } else {
      message.newBook = undefined;
    }
    if (object.storedBookList !== undefined && object.storedBookList !== null) {
      for (const e of object.storedBookList) {
        message.storedBookList.push(StoredBook.fromPartial(e));
      }
    }
    return message;
  },
};

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
