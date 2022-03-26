export interface EventEmitter {
    postMessage: (message: unknown, targetOrigin: string) => void;
}
export declare const eventEmitter: (window: Window) => EventEmitter;
export declare enum CivicSignEventTypeResponse {
    RESPONSE_PUBLIC_KEY = "RESPONSE_PUBLIC_KEY",
    RESPONSE_DID = "RESPONSE_DID",
    RESPONSE_SIGNED_PROOF = "RESPONSE_SIGNED_PROOF"
}
export declare enum CivicSignEventTypeRequest {
    REQUEST_PUBLIC_KEY = "REQUEST_PUBLIC_KEY",
    REQUEST_DID = "REQUEST_DID",
    REQUEST_SIGNED_PROOF = "REQUEST_SIGNED_PROOF"
}
export interface RemoteSign {
    sendPublicKey: (publicKey: string) => void;
    sendDid: (did: string) => void;
    sendSignedProof: (proof: string) => void;
}
export declare type CivicSignResponseEvent = {
    event: CivicSignEventTypeResponse;
    data: string;
};
export declare class RemoteSignWindowEventEmitter implements RemoteSign {
    private targetWindow;
    constructor(targetWindow: EventEmitter);
    sendPublicKey(publicKey: string): void;
    sendDid(did: string): void;
    sendSignedProof(proof: string): void;
    private emit;
}
export declare const remoteSignWindowEventEmitterImplementation: () => RemoteSignWindowEventEmitter | null;
