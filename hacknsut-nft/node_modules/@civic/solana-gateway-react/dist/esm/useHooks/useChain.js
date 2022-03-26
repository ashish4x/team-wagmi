"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
const react_1 = require("react");
const types_1 = require("../types");
const logger_1 = __importDefault(require("../logger"));
const useWalletHooks_1 = __importDefault(require("./useWalletHooks"));
const reducer = (state, action) => {
    switch (action.type) {
        case 'tokenOnChainNotFound':
            return Object.assign(Object.assign({}, state), { gatewayStatus: types_1.GatewayStatus.NOT_REQUESTED });
        case 'tokenOnChainError':
            return Object.assign(Object.assign({}, state), { gatewayStatus: types_1.GatewayStatus.ERROR });
        default:
            return state;
    }
};
exports.reducer = reducer;
const useChain = ({ wallet, chainImplementation, networkConfig, }, state, dispatch) => {
    const { expectWalletConnected } = (0, useWalletHooks_1.default)(wallet, state, dispatch);
    const { gatekeeperRecordState, gatewayToken } = state;
    const logDebug = (message, obj = null) => logger_1.default.debug(`[useChain] ${message}`, obj);
    const logError = (message, obj = null) => logger_1.default.error(`[useChain] ${message}`, obj);
    const removeOnChainListener = (listernerId) => {
        try {
            logDebug('Removing onChainListener with id: ', listernerId);
            chainImplementation.removeOnGatewayTokenChangeListener(listernerId);
        }
        catch (error) {
            logError('Error removing on chain listener', error);
        }
    };
    /**
     * listen to the blockchain for any token changes and update local state if there are
     */
    const addTokenChangeListeners = 
    // eslint-disable-next-line @typescript-eslint/no-shadow
    (gatewayToken) => {
        const tokenChangeCallback = (token) => {
            dispatch({ type: 'tokenChange', token });
            dispatch({ type: 'civicPass_check_token_status', token });
        };
        const listernerId = chainImplementation.addOnGatewayTokenChangeListener(gatewayToken, tokenChangeCallback);
        logDebug('Adding onChainListener with id: ', listernerId);
        return listernerId;
    };
    (0, react_1.useEffect)(() => {
        let listernerId;
        if (gatewayToken) {
            listernerId = addTokenChangeListeners(gatewayToken);
        }
        return () => {
            if (listernerId) {
                removeOnChainListener(listernerId);
            }
        };
    }, [gatekeeperRecordState, gatewayToken]);
    /**
     * use the on-chain lookup utility findGatewayToken to retrieve a token from the chain
     * when a token is found, set up listeners to monitor any on-chain changes
     */
    const dispatchTokenFromChain = async () => {
        const connectedWallet = expectWalletConnected();
        try {
            logDebug('Fetching token from chain');
            const token = await chainImplementation.findGatewayToken();
            if (!token) {
                dispatch({ type: 'tokenOnChainNotFound' });
                return;
            }
            logDebug('Token found', token);
            dispatch({ type: 'tokenChange', token });
            // Determine if we should show the civicPass dialog when we have a gateway token
            const shouldDispatchTokenFromChain = gatekeeperRecordState &&
                [
                    types_1.GatekeeperRecordState.ISSUED_EXPIRED,
                    types_1.GatekeeperRecordState.ISSUED_EXPIRY_APPROACHING,
                    types_1.GatekeeperRecordState.ISSUED_LOCATION_NOT_SUPPORTED,
                ].includes(gatekeeperRecordState);
            if (!shouldDispatchTokenFromChain)
                return;
            dispatch({ type: 'civicPass_check_token_status', token });
        }
        catch (error) {
            logError(`Error getting token from chain for ${connectedWallet.publicKey}`, error);
            dispatch({ type: 'tokenOnChainError' });
            throw error;
        }
    };
    /**
     * Determine if we should fetch a token from chain based on the gatekeeper record state
     */
    (0, react_1.useEffect)(() => {
        const shouldDispatchTokenFromChain = gatekeeperRecordState &&
            [
                types_1.GatekeeperRecordState.ISSUED,
                types_1.GatekeeperRecordState.ISSUED_EXPIRED,
                types_1.GatekeeperRecordState.ISSUED_EXPIRY_APPROACHING,
                types_1.GatekeeperRecordState.REQUESTED,
                types_1.GatekeeperRecordState.ISSUED_LOCATION_NOT_SUPPORTED,
                types_1.GatekeeperRecordState.SERVER_FAILURE,
            ].includes(gatekeeperRecordState);
        if (!shouldDispatchTokenFromChain)
            return;
        dispatchTokenFromChain();
    }, [gatekeeperRecordState]);
    /**
     * Check token on chain if checking the record status is not required
     * This will then run when the component is mounted instead of after the record has been fetched
     */
    (0, react_1.useEffect)(() => {
        if (networkConfig.requiresGatekeeperRecordStatusCheck)
            return;
        dispatchTokenFromChain();
    }, [networkConfig.requiresGatekeeperRecordStatusCheck]);
    return {
        addTokenChangeListeners,
        dispatchTokenFromChain,
    };
};
exports.default = useChain;
