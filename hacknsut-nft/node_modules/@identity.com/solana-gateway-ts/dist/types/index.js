"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GatewayToken = exports.State = void 0;
const GatewayTokenData_1 = require("../lib/GatewayTokenData");
const util_1 = require("../lib/util");
var State;
(function (State) {
    State["ACTIVE"] = "ACTIVE";
    State["REVOKED"] = "REVOKED";
    State["FROZEN"] = "FROZEN";
})(State = exports.State || (exports.State = {}));
class GatewayToken {
    constructor(
    //  the key used to reference the issuing gatekeeper
    issuingGatekeeper, gatekeeperNetwork, owner, state, publicKey, programId, expiryTime) {
        this.issuingGatekeeper = issuingGatekeeper;
        this.gatekeeperNetwork = gatekeeperNetwork;
        this.owner = owner;
        this.state = state;
        this.publicKey = publicKey;
        this.programId = programId;
        this.expiryTime = expiryTime;
    }
    isValid() {
        return this.state === State.ACTIVE && !this.hasExpired();
    }
    hasExpired() {
        const now = Math.floor(Date.now() / 1000);
        return !!this.expiryTime && now > this.expiryTime;
    }
    static fromAccount(accountInfo, key) {
        const parsedData = GatewayTokenData_1.GatewayTokenData.fromAccount(accountInfo.data);
        return (0, util_1.dataToGatewayToken)(parsedData, key);
    }
    update({ state, expiryTime, }) {
        return new GatewayToken(this.issuingGatekeeper, this.gatekeeperNetwork, this.owner, state, this.publicKey, this.programId, expiryTime || this.expiryTime);
    }
}
exports.GatewayToken = GatewayToken;
//# sourceMappingURL=index.js.map