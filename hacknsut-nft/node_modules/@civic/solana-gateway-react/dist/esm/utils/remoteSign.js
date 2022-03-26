"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.remoteSignWindowEventEmitterImplementation = exports.RemoteSignWindowEventEmitter = exports.CivicSignEventTypeRequest = exports.CivicSignEventTypeResponse = exports.eventEmitter = void 0;
const logger_1 = __importDefault(require("../logger"));
const constants_1 = require("../constants");
const eventEmitter = (window) => {
    return {
        postMessage: (message, targetOrigin) => {
            window.postMessage(message, targetOrigin);
        },
    };
};
exports.eventEmitter = eventEmitter;
// TODO: Duplicate types in CivicSign
// Move to a central repo or use TS paths
var CivicSignEventTypeResponse;
(function (CivicSignEventTypeResponse) {
    CivicSignEventTypeResponse["RESPONSE_PUBLIC_KEY"] = "RESPONSE_PUBLIC_KEY";
    CivicSignEventTypeResponse["RESPONSE_DID"] = "RESPONSE_DID";
    CivicSignEventTypeResponse["RESPONSE_SIGNED_PROOF"] = "RESPONSE_SIGNED_PROOF";
})(CivicSignEventTypeResponse = exports.CivicSignEventTypeResponse || (exports.CivicSignEventTypeResponse = {}));
var CivicSignEventTypeRequest;
(function (CivicSignEventTypeRequest) {
    CivicSignEventTypeRequest["REQUEST_PUBLIC_KEY"] = "REQUEST_PUBLIC_KEY";
    CivicSignEventTypeRequest["REQUEST_DID"] = "REQUEST_DID";
    CivicSignEventTypeRequest["REQUEST_SIGNED_PROOF"] = "REQUEST_SIGNED_PROOF";
})(CivicSignEventTypeRequest = exports.CivicSignEventTypeRequest || (exports.CivicSignEventTypeRequest = {}));
class RemoteSignWindowEventEmitter {
    constructor(targetWindow) {
        this.targetWindow = targetWindow;
    }
    sendPublicKey(publicKey) {
        this.emit({
            event: CivicSignEventTypeResponse.RESPONSE_PUBLIC_KEY,
            data: publicKey,
        });
    }
    sendDid(did) {
        this.emit({
            event: CivicSignEventTypeResponse.RESPONSE_DID,
            data: did,
        });
    }
    sendSignedProof(proof) {
        this.emit({
            event: CivicSignEventTypeResponse.RESPONSE_SIGNED_PROOF,
            data: proof,
        });
    }
    emit(event) {
        this.targetWindow.postMessage(event, '*');
    }
}
exports.RemoteSignWindowEventEmitter = RemoteSignWindowEventEmitter;
const remoteSignWindowEventEmitterImplementation = () => {
    var _a;
    const iFrameWindow = (_a = document.getElementById(constants_1.IFRAME_ID)) === null || _a === void 0 ? void 0 : _a.contentWindow;
    if (!iFrameWindow) {
        logger_1.default.debug('no iFrame window present');
        return null;
    }
    return new RemoteSignWindowEventEmitter((0, exports.eventEmitter)(iFrameWindow));
};
exports.remoteSignWindowEventEmitterImplementation = remoteSignWindowEventEmitterImplementation;
