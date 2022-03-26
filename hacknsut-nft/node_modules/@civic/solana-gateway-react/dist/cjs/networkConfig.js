"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.localConfig = void 0;
var Network;
(function (Network) {
    Network["IGNITE"] = "ignitePass";
    Network["IGNITE_NFT"] = "igniteNftPass";
    Network["NILE"] = "nilePass";
})(Network || (Network = {}));
const defaultConfiguration = {
    networkAddressMappings: {
        // test networks
        tigoYhp9SpCDoCQmXGj2im5xa3mnjR1zuXrpCJ5ZRmi: Network.IGNITE,
        tig2iQjtihM8GbWS1z5LJi9ytTkj4poeh2N3MW4n9gt: Network.IGNITE_NFT,
        tniC2HX5yg2yDjMQEcUo1bHa44x9YdZVSqyKox21SDz: Network.NILE,
        // production networks
        ignREusXmGrscGNUesoU9mxfds9AiYTezUKex2PsZV6: Network.IGNITE,
        ign2PJfwxvYxAZpMdXgLdY4VLCnChPZWjtTeQwQfQdc: Network.IGNITE_NFT,
        ni1jXzPTq1yTqo67tUmVgnp22b1qGAAZCtPmHtskqYG: Network.NILE,
    },
    networkConfigs: {
        // We need to check the Gatekeeper record to determine if the user passes all the gatekeeper network rules
        // This is not required for IgnitePass
        requiresGatekeeperRecordStatusCheck: true,
        tokenExpirationMarginSeconds: 60 * 60 * 6,
        pollChainIntervalMilliseconds: 2000,
        pollChainNumberRetries: 30,
        waitForTokenRefreshTimoutMilliseconds: 1000 * 60,
        [Network.IGNITE]: {
            requiresGatekeeperRecordStatusCheck: false,
            tokenExpirationMarginSeconds: 60,
        },
        [Network.IGNITE_NFT]: {
            requiresGatekeeperRecordStatusCheck: false,
            tokenExpirationMarginSeconds: 60,
        },
        [Network.NILE]: {
            requiresGatekeeperRecordStatusCheck: true,
        },
    },
};
const testConfig = Object.assign(Object.assign({}, defaultConfiguration), { networkConfigs: Object.assign(Object.assign({}, defaultConfiguration.networkConfigs), { tokenExpirationMarginSeconds: 10 }) });
exports.localConfig = Object.assign(Object.assign({}, defaultConfiguration), { networkConfigs: Object.assign(Object.assign({}, defaultConfiguration.networkConfigs), { tokenExpirationMarginSeconds: 60 * 1 }) });
const devConfig = Object.assign(Object.assign({}, defaultConfiguration), { networkConfigs: Object.assign(Object.assign({}, defaultConfiguration.networkConfigs), { tokenExpirationMarginSeconds: 60 * 15 }) });
const preprodConfig = Object.assign({}, defaultConfiguration);
const prodConfig = Object.assign({}, defaultConfiguration);
const stageConfigs = {
    test: testConfig,
    local: exports.localConfig,
    dev: devConfig,
    preprod: preprodConfig,
    prod: prodConfig,
};
const config = ({ gatekeeperNetworkAddress, stage, }) => {
    var _a, _b;
    const stageConfig = stageConfigs[stage];
    const networkName = gatekeeperNetworkAddress ? stageConfig === null || stageConfig === void 0 ? void 0 : stageConfig.networkAddressMappings[gatekeeperNetworkAddress] : null;
    const networkConfig = networkName ? stageConfig === null || stageConfig === void 0 ? void 0 : stageConfig.networkConfigs[networkName] : stageConfig;
    const tokenExpirationMarginSeconds = (_a = networkConfig === null || networkConfig === void 0 ? void 0 : networkConfig.tokenExpirationMarginSeconds) !== null && _a !== void 0 ? _a : stageConfig.networkConfigs.tokenExpirationMarginSeconds;
    const { pollChainIntervalMilliseconds, pollChainNumberRetries, waitForTokenRefreshTimoutMilliseconds, requiresGatekeeperRecordStatusCheck, } = defaultConfiguration.networkConfigs;
    return {
        pollChainNumberRetries,
        pollChainIntervalMilliseconds,
        waitForTokenRefreshTimoutMilliseconds,
        tokenExpirationMarginSeconds,
        requiresGatekeeperRecordStatusCheck: (_b = networkConfig === null || networkConfig === void 0 ? void 0 : networkConfig.requiresGatekeeperRecordStatusCheck) !== null && _b !== void 0 ? _b : requiresGatekeeperRecordStatusCheck,
    };
};
exports.default = config;
