"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDefaultApiNumRetries = exports.API_NUM_RETRIES = exports.getCivicPassEndpoint = exports.COMPLIANCE_ENDPOINTS = exports.DEFAULT_API_NUM_RETRIES = exports.DEFAULT_REFRESH_INTERVAL = exports.DEFAULT_GATEKEEPER_STAGE = exports.DEFAULT_CIVIC_COMPLIANCE_SRC_URL = void 0;
exports.DEFAULT_CIVIC_COMPLIANCE_SRC_URL = 'https://pass-dev.civic.com/';
exports.DEFAULT_GATEKEEPER_STAGE = 'prod';
// This is the regular refresh interval, not retry on errors:
exports.DEFAULT_REFRESH_INTERVAL = 1000 * 60 * 60 * 6; // 6 hours
exports.DEFAULT_API_NUM_RETRIES = 3;
exports.COMPLIANCE_ENDPOINTS = {
    test: 'https://passv2-dev.civic.com',
    local: 'https://passv2-dev.civic.com',
    dev: 'https://passv2-dev.civic.com',
    preprod: 'https://passv2-preprod.civic.com',
    prod: 'https://passv2.civic.com',
};
const getCivicPassEndpoint = (stage) => {
    const endpoint = exports.COMPLIANCE_ENDPOINTS[stage];
    if (!endpoint) {
        throw new Error(`Invalid stage ${stage}`);
    }
    return endpoint;
};
exports.getCivicPassEndpoint = getCivicPassEndpoint;
/*
 * Number of retries when an API call fails
 * This uses exponential backoff so we don't want too many retries
 * as it can spread out in time quite quickly.
 */
exports.API_NUM_RETRIES = {
    test: 5,
    local: 5,
    dev: 5,
};
const getDefaultApiNumRetries = (stage) => exports.API_NUM_RETRIES[stage] || exports.DEFAULT_API_NUM_RETRIES;
exports.getDefaultApiNumRetries = getDefaultApiNumRetries;
