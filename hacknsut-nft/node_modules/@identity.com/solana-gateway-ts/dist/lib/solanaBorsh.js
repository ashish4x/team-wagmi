"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enum = exports.Assignable = exports.SCHEMA = void 0;
const borsh_1 = require("borsh");
exports.SCHEMA = new Map();
// Class wrapping a plain object
class Assignable {
    constructor(properties) {
        Object.keys(properties).forEach((key) => {
            // this is probably possible in Typescript,
            // but requires (keyof this) which is not possible in the the constructor
            // @ts-ignore
            this[key] = properties[key];
        });
    }
    encode() {
        return Buffer.from((0, borsh_1.serialize)(exports.SCHEMA, this));
    }
    static decode(data) {
        return (0, borsh_1.deserialize)(exports.SCHEMA, this, data);
    }
}
exports.Assignable = Assignable;
// Class representing a Rust-compatible enum, since enums are only strings or
// numbers in pure JS
class Enum extends Assignable {
    constructor(properties) {
        super(properties);
        if (Object.keys(properties).length !== 1) {
            throw new Error("Enum can only take single value");
        }
        this.enum = "";
        Object.keys(properties).forEach((key) => {
            this.enum = key;
        });
    }
}
exports.Enum = Enum;
//# sourceMappingURL=solanaBorsh.js.map