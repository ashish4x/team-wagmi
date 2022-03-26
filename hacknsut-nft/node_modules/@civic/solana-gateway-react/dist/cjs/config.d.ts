export declare const DEFAULT_CIVIC_COMPLIANCE_SRC_URL = "https://pass-dev.civic.com/";
export declare const DEFAULT_GATEKEEPER_STAGE = "prod";
export declare const DEFAULT_REFRESH_INTERVAL: number;
export declare const DEFAULT_API_NUM_RETRIES = 3;
export declare const COMPLIANCE_ENDPOINTS: {
    test: string;
    local: string;
    dev: string;
    preprod: string;
    prod: string;
};
export declare const getCivicPassEndpoint: (stage: string) => string;
export declare const API_NUM_RETRIES: {
    test: number;
    local: number;
    dev: number;
};
export declare const getDefaultApiNumRetries: (stage: string) => number;
