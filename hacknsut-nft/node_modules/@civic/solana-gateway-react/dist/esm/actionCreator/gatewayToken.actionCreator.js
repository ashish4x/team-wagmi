"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GatewayTokenActionCreatorImplementation = void 0;
/* eslint-disable @typescript-eslint/no-unused-vars */
const solana_gateway_ts_1 = require("@identity.com/solana-gateway-ts");
const types_1 = require("../types");
const logger_1 = __importDefault(require("../logger"));
const utils_1 = require("./utils");
const GatewayTokenActionCreatorImplementation = ({ wallet, chainImplementation, gatekeeperClient, dispatch, networkConfig, }) => {
    const logDebug = (message, obj = null) => logger_1.default.debug(`[useChain] ${message}`, obj);
    const logError = (message, obj = null) => logger_1.default.error(`[useChain] ${message}`, obj);
    const isTokenCreated = (code) => code === 200;
    const isTokenPending = (code) => code === 202 || code === 404;
    const isFailure = (code) => !isTokenPending(code) && code >= 400;
    const pollForActiveOnChainToken = async () => {
        return (0, utils_1.pollUntilConditionMet)(chainImplementation.findGatewayToken, (onChainToken) => {
            if (!onChainToken)
                return false; // keep polling
            if (!onChainToken.expiryTime)
                return true;
            if (onChainToken.state === solana_gateway_ts_1.State.ACTIVE)
                return true;
            throw new Error('Token found but not ACTIVE');
        }, networkConfig.pollChainIntervalMilliseconds, networkConfig.pollChainNumberRetries);
    };
    const waitForGatewayToken = async () => {
        // poll the gatekeeper until we have a status for a created record
        // if we don't get a created token, then we consider it a failure
        try {
            const token = await pollForActiveOnChainToken();
            logDebug('Result from pollForActiveOnChainToken', token);
            if (!token) {
                logError('Token not found onChain');
                throw new Error('Token not found onChain');
            }
            dispatch({ type: 'tokenChange', token });
            dispatch({ type: 'civicPass_check_token_status', token });
            return;
        }
        catch (error) {
            logError('Failed to find Gateway token on-chain, checking with gatekeeper');
            const state = await gatekeeperClient().getGatekeeperStatus(wallet.publicKey);
            // if the token is still pending or in review then keep polling on-chain
            if (isTokenPending(state)) {
                await waitForGatewayToken();
            }
            // retries have been exhausted and we still don't have a token
            // or the gatekeeper threw an error during issuance attempt
            if (isTokenCreated(state) || isFailure(state)) {
                logError('Failed to find Gateway token with gatekeeper status code', types_1.GatekeeperRecordState[state]);
                dispatch({ type: 'tokenNotFoundError' });
            }
        }
    };
    return {
        waitForGatewayToken,
    };
};
exports.GatewayTokenActionCreatorImplementation = GatewayTokenActionCreatorImplementation;
