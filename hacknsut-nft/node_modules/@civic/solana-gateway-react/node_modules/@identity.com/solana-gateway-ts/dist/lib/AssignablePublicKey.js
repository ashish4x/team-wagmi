"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssignablePublicKey = void 0;
const solanaBorsh_1 = require("./solanaBorsh");
const web3_js_1 = require("@solana/web3.js");
/**
 * A Borsh-compatible public key object
 *
 * The pattern for these objects is to have their properties dynamically
 * assigned by borsh.decode, as opposed to via a constructor.
 *
 * The imperative assignment operator (!) is used to avoid Typescript
 * complaining about the above.
 */
class AssignablePublicKey extends solanaBorsh_1.Assignable {
    toPublicKey() {
        return new web3_js_1.PublicKey(this.bytes);
    }
    toString() {
        return this.toPublicKey().toBase58();
    }
    static parse(pubkey) {
        return AssignablePublicKey.fromPublicKey(new web3_js_1.PublicKey(pubkey));
    }
    static fromPublicKey(publicKey) {
        return new AssignablePublicKey({
            bytes: Uint8Array.from(publicKey.toBuffer()),
        });
    }
    static empty() {
        const bytes = new Array(32);
        bytes.fill(0);
        return new AssignablePublicKey({ bytes });
    }
}
exports.AssignablePublicKey = AssignablePublicKey;
solanaBorsh_1.SCHEMA.set(AssignablePublicKey, {
    kind: "struct",
    fields: [["bytes", [32]]],
});
//# sourceMappingURL=AssignablePublicKey.js.map