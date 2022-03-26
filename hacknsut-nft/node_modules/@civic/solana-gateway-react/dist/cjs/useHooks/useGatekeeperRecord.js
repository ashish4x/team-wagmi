"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
const react_1 = require("react");
const R = __importStar(require("ramda"));
const types_1 = require("../types");
const logger_1 = __importDefault(require("../logger"));
const useWalletHooks_1 = __importDefault(require("./useWalletHooks"));
const reducer = (state, action) => {
    switch (action.type) {
        case 'getGatekeeperRecord':
            return Object.assign(Object.assign({}, state), { gatewayStatus: types_1.GatewayStatus.CHECKING, gatekeeperRecordState: undefined });
        case 'getGatekeeperRecord_failure':
            return Object.assign(Object.assign({}, state), { gatekeeperRecordState: action.gatekeeperRecord.state });
        case 'getGatekeeperRecord_success':
            return Object.assign(Object.assign({}, state), { gatekeeperRecordState: action.gatekeeperRecord.state, civicPass: Object.assign(Object.assign({}, state.civicPass), { requestPayload: action.gatekeeperRecord.payload }) });
        case 'getGatekeeperRecord_location_not_supported':
            return Object.assign(Object.assign({}, state), { gatewayStatus: types_1.GatewayStatus.LOCATION_NOT_SUPPORTED, gatekeeperRecordState: action.gatekeeperRecord.state, civicPass: Object.assign(Object.assign({}, state.civicPass), { requestPayload: action.gatekeeperRecord.payload }) });
        case 'getGatekeeperRecord_issued_location_not_supported':
            return Object.assign(Object.assign({}, state), { gatewayStatus: types_1.GatewayStatus.LOCATION_NOT_SUPPORTED, gatekeeperRecordState: action.gatekeeperRecord.state, civicPass: Object.assign(Object.assign({}, state.civicPass), { requestPayload: action.gatekeeperRecord.payload }) });
        case 'getGatekeeperRecord_not_found':
            return Object.assign(Object.assign({}, state), { gatekeeperRecordState: action.gatekeeperRecord.state });
        default:
            return state;
    }
};
exports.reducer = reducer;
const useGetGatekeeperRecord = ({ wallet, gatekeeperClient, httpConfig, networkConfig, }, state, dispatch) => {
    const { expectWalletConnected } = (0, useWalletHooks_1.default)(wallet, state, dispatch);
    const logDebug = (message, obj = null) => logger_1.default.debug(`[useGetGatekeeperRecord] ${message}`, obj);
    const { gatewayToken, gatekeeperNetworkAddress } = state;
    const dispatchFetch = () => ({
        type: 'getGatekeeperRecord',
    });
    const dispatchFailure = () => ({
        type: 'getGatekeeperRecord_failure',
        gatekeeperRecord: { state: types_1.GatekeeperRecordState.SERVER_FAILURE, payload: undefined },
    });
    const dispatchSuccess = (record) => ({
        type: 'getGatekeeperRecord_success',
        gatekeeperRecord: record,
    });
    const dispatchLocationNotSupported = (record) => ({
        type: 'getGatekeeperRecord_location_not_supported',
        gatekeeperRecord: record,
    });
    const dispatchIssuedLocationNotSupported = (record) => ({
        type: 'getGatekeeperRecord_issued_location_not_supported',
        gatekeeperRecord: record,
    });
    const dispatchRecordNotFound = (record) => ({
        type: 'getGatekeeperRecord_not_found',
        gatekeeperRecord: record,
    });
    const getAction = (gatekeeperRecordState) => {
        const actions = {
            [types_1.GatekeeperRecordState.REQUESTED]: () => dispatchSuccess(gatekeeperRecordState),
            [types_1.GatekeeperRecordState.ISSUED]: () => dispatchSuccess(gatekeeperRecordState),
            [types_1.GatekeeperRecordState.ISSUED_EXPIRED]: () => dispatchSuccess(gatekeeperRecordState),
            [types_1.GatekeeperRecordState.ISSUED_EXPIRY_APPROACHING]: () => dispatchSuccess(gatekeeperRecordState),
            [types_1.GatekeeperRecordState.ISSUED_LOCATION_NOT_SUPPORTED]: () => dispatchIssuedLocationNotSupported(gatekeeperRecordState),
            [types_1.GatekeeperRecordState.LOCATION_NOT_SUPPORTED]: () => dispatchLocationNotSupported(gatekeeperRecordState),
            [types_1.GatekeeperRecordState.NOT_REQUESTED]: () => dispatchRecordNotFound(gatekeeperRecordState),
        };
        return actions[gatekeeperRecordState.state];
    };
    /**
     * Check to see if there is getGatekeeperRecord and dispatch actions based on the state of the record.
     * If the service call fails dispatch a failure.
     */
    const dispatchGatekeeperRecord = async () => {
        const walletAddress = expectWalletConnected();
        logDebug('Fetching Gatekeeper record');
        dispatch(dispatchFetch());
        try {
            const record = await gatekeeperClient().getGatekeeperRecordWithPayload(walletAddress.publicKey);
            logDebug('Gatekeeper record response state: ', types_1.GatekeeperRecordState[record.state]);
            const action = getAction(record);
            if (!action) {
                logger_1.default.error('Cannot dispatch action for invalid Gatekeeper Record State.', { record });
                return;
            }
            dispatch(action());
        }
        catch (error) {
            logger_1.default.error('Failed to fetch Gatekeeper record', error);
            dispatch(dispatchFailure());
            throw error;
        }
    };
    const useHttpConfigRef = (newHttpConfig) => {
        const ref = (0, react_1.useRef)();
        // We have to perform a deep equality check, otherwise useEffect will run every time the httpConfig object reference changes.
        if (!R.equals(newHttpConfig, ref.current)) {
            ref.current = newHttpConfig;
        }
        return ref.current;
    };
    (0, react_1.useEffect)(() => {
        if (networkConfig.requiresGatekeeperRecordStatusCheck) {
            dispatchGatekeeperRecord();
        }
    }, [
        gatewayToken === null || gatewayToken === void 0 ? void 0 : gatewayToken.state,
        gatewayToken === null || gatewayToken === void 0 ? void 0 : gatewayToken.expiryTime,
        gatekeeperNetworkAddress,
        useHttpConfigRef(httpConfig),
        networkConfig.requiresGatekeeperRecordStatusCheck,
    ]);
    return { dispatchGatekeeperRecord };
};
exports.default = useGetGatekeeperRecord;
