/// <reference types="node" />
import { Schema } from "borsh";
export declare const SCHEMA: Schema;
export declare abstract class Assignable {
    constructor(properties: {
        [key: string]: any;
    });
    encode(): Buffer;
    static decode<T extends Assignable>(data: Buffer): T;
}
export declare abstract class Enum extends Assignable {
    enum: string;
    constructor(properties: any);
}
