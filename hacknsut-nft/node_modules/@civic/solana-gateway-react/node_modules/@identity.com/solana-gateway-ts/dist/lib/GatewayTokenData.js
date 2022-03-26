"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GatewayTokenState = exports.Revoked = exports.Frozen = exports.Active = exports.GatewayTokenData = void 0;
const web3_js_1 = require("@solana/web3.js");
const solanaBorsh_1 = require("./solanaBorsh");
const AssignablePublicKey_1 = require("./AssignablePublicKey");
/**
 * The on-chain structure of a gateway token.
 * Matches: solana/integration-lib/src/state.rs
 *
 * The pattern for these objects is to have their properties dynamically
 * assigned by borsh.decode, as opposed to via a constructor.
 *
 * The imperative assignment operator (!) is used to avoid Typescript
 * complaining about the above.
 */
class GatewayTokenData extends solanaBorsh_1.Assignable {
    static fromAccount(accountData) {
        return GatewayTokenData.decode(accountData);
    }
    forAuthority(authority) {
        return new GatewayTokenData(Object.assign(Object.assign({}, this), { authority: AssignablePublicKey_1.AssignablePublicKey.fromPublicKey(authority) }));
    }
    static empty(owner) {
        return new GatewayTokenData({
            owner: AssignablePublicKey_1.AssignablePublicKey.fromPublicKey(owner || web3_js_1.Keypair.generate().publicKey),
        });
    }
}
exports.GatewayTokenData = GatewayTokenData;
class Active extends solanaBorsh_1.Assignable {
}
exports.Active = Active;
class Frozen extends solanaBorsh_1.Assignable {
}
exports.Frozen = Frozen;
class Revoked extends solanaBorsh_1.Assignable {
}
exports.Revoked = Revoked;
class GatewayTokenState extends solanaBorsh_1.Enum {
}
exports.GatewayTokenState = GatewayTokenState;
solanaBorsh_1.SCHEMA.set(GatewayTokenData, {
    kind: "struct",
    fields: [
        ["features", [1]],
        ["parentGatewayToken", { kind: "option", type: AssignablePublicKey_1.AssignablePublicKey }],
        ["owner", AssignablePublicKey_1.AssignablePublicKey],
        ["ownerIdentity", { kind: "option", type: AssignablePublicKey_1.AssignablePublicKey }],
        ["gatekeeperNetwork", AssignablePublicKey_1.AssignablePublicKey],
        ["issuingGatekeeper", AssignablePublicKey_1.AssignablePublicKey],
        ["state", GatewayTokenState],
        ["expiry", { kind: "option", type: "u64" }],
    ],
});
solanaBorsh_1.SCHEMA.set(GatewayTokenState, {
    kind: "enum",
    field: "enum",
    values: [
        ["active", Active],
        ["frozen", Frozen],
        ["revoked", Revoked],
    ],
});
solanaBorsh_1.SCHEMA.set(Active, { kind: "struct", fields: [] });
solanaBorsh_1.SCHEMA.set(Frozen, { kind: "struct", fields: [] });
solanaBorsh_1.SCHEMA.set(Revoked, { kind: "struct", fields: [] });
//# sourceMappingURL=GatewayTokenData.js.map