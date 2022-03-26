"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeConfig = exports.getGatekeeperEndpoint = exports.GATEKEEPER_ENDPOINTS = exports.urlToCluster = exports.clusterEndpoint = void 0;
const web3_js_1 = require("@solana/web3.js");
const clusterEndpoint = (cluster) => {
    switch (cluster) {
        case 'civicnet':
            return 'https://d3ab7dlfud2b5u.cloudfront.net';
        case 'localnet':
            return 'http://localhost:8899';
        default: {
            return cluster === 'mainnet-beta'
                ? 'https://civic.rpcpool.com/f40a068020b85335d0c8f2783747/'
                : (0, web3_js_1.clusterApiUrl)(cluster);
        }
    }
};
exports.clusterEndpoint = clusterEndpoint;
// reverse lookup of cluster from url
// note - this is a "best-guess" heuristic. If the client passes an unrecognised
// url, default to mainnet
const urlToCluster = (clusterUrl) => {
    const supportedClusters = ['devnet', 'testnet', 'mainnet-beta', 'civicnet', 'localnet'];
    const matchedUrlCluster = supportedClusters.find((cluster) => (0, exports.clusterEndpoint)(cluster) === clusterUrl);
    if (matchedUrlCluster)
        return matchedUrlCluster;
    const matchedStringCluster = supportedClusters.find((cluster) => clusterUrl.indexOf(cluster) >= 0);
    if (matchedStringCluster)
        return matchedStringCluster;
    return 'mainnet-beta';
};
exports.urlToCluster = urlToCluster;
const solanaVersionedEndpoint = 'v1/token/solana';
exports.GATEKEEPER_ENDPOINTS = {
    local: `http://localhost:3001/local/${solanaVersionedEndpoint}`,
    test: `http://localhost:3001/local/${solanaVersionedEndpoint}`,
    dev: `https://dev-gatekeeper-api.civic.com/${solanaVersionedEndpoint}`,
    preprod: `https://preprod-gatekeeper-api.civic.com/${solanaVersionedEndpoint}`,
    prod: `https://gatekeeper-api.civic.com/${solanaVersionedEndpoint}`,
};
const getGatekeeperEndpoint = (stage) => {
    const endpoint = exports.GATEKEEPER_ENDPOINTS[stage];
    if (!endpoint) {
        throw new Error(`Invalid stage ${stage}`);
    }
    return endpoint;
};
exports.getGatekeeperEndpoint = getGatekeeperEndpoint;
const makeConfig = (clusterUrl) => {
    const cluster = (0, exports.urlToCluster)(clusterUrl);
    return {
        cluster,
        commitment: 'confirmed',
        // this map instructs the POWO library to use clusterUrl
        // to connect to the solana network. This avoids rate limiting issues with using the default
        // public urls
        supportedClusterUrls: {
            [cluster]: clusterUrl,
        },
        recentBlockCheck: false,
    };
};
exports.makeConfig = makeConfig;
