"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const remoteSign_1 = require("../utils/remoteSign");
const logger_1 = __importDefault(require("../logger"));
const logDebug = (message, obj = null) => logger_1.default.debug(`[useCivicPassEventListener] ${message}`, obj);
const logError = (message, obj = null) => logger_1.default.error(`[useCivicPassEventListener] ${message}`, obj);
const useCivicPassEventListener = ({ wallet, chainImplementation, remoteSign, }) => {
    const dispatchEvent = async (response) => {
        if (!wallet)
            return;
        const remoteSigner = remoteSign !== null && remoteSign !== void 0 ? remoteSign : (0, remoteSign_1.remoteSignWindowEventEmitterImplementation)();
        const events = {
            [remoteSign_1.CivicSignEventTypeRequest.REQUEST_PUBLIC_KEY]: () => new Promise((resolve) => {
                remoteSigner === null || remoteSigner === void 0 ? void 0 : remoteSigner.sendPublicKey(wallet.publicKey);
                resolve();
            }),
            [remoteSign_1.CivicSignEventTypeRequest.REQUEST_DID]: () => new Promise((resolve) => {
                remoteSigner === null || remoteSigner === void 0 ? void 0 : remoteSigner.sendDid(`did:sol:${wallet.publicKey}`);
                resolve();
            }),
            [remoteSign_1.CivicSignEventTypeRequest.REQUEST_SIGNED_PROOF]: async () => {
                try {
                    const proof = await chainImplementation.proveWalletOwnership();
                    remoteSigner === null || remoteSigner === void 0 ? void 0 : remoteSigner.sendSignedProof(proof);
                }
                catch (err) {
                    logError('Error signing proof', err);
                }
            },
        };
        const event = events[response];
        if (event) {
            await event();
            logDebug('Successfully emitted compliance event', response);
        }
    };
    /**
     * Listen for post messages from the compliance iframe and dispatch events
     * based on the event type
     */
    (0, react_1.useEffect)(() => {
        const handler = async (response) => {
            await dispatchEvent(response.data);
        };
        window.addEventListener('message', handler);
        return () => {
            logDebug('Removing event listener for compliance');
            return window.removeEventListener('message', handler);
        };
    }, []);
    return { dispatchEvent };
};
exports.default = useCivicPassEventListener;
