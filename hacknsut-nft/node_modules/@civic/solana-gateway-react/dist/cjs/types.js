"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationStatus = exports.CivicPassMessageAction = exports.CivicPassMessageEventResult = exports.ChainType = exports.RefreshTokenState = exports.CivicPassIssuanceStatus = exports.TokenIssuanceState = exports.GatewayStatus = exports.GatekeeperRecordState = exports.TokenState = exports.State = void 0;
var State;
(function (State) {
    State["ACTIVE"] = "ACTIVE";
    State["REVOKED"] = "REVOKED";
    State["FROZEN"] = "FROZEN";
})(State = exports.State || (exports.State = {}));
var TokenState;
(function (TokenState) {
    TokenState["REQUESTED"] = "REQUESTED";
    TokenState["ACTIVE"] = "ACTIVE";
    TokenState["REVOKED"] = "REVOKED";
    TokenState["FROZEN"] = "FROZEN";
    TokenState["REJECTED"] = "REJECTED";
})(TokenState = exports.TokenState || (exports.TokenState = {}));
var GatekeeperRecordState;
(function (GatekeeperRecordState) {
    GatekeeperRecordState[GatekeeperRecordState["REQUESTING"] = 0] = "REQUESTING";
    GatekeeperRecordState[GatekeeperRecordState["NOT_REQUESTED"] = 404] = "NOT_REQUESTED";
    GatekeeperRecordState[GatekeeperRecordState["REQUESTED"] = 202] = "REQUESTED";
    GatekeeperRecordState[GatekeeperRecordState["ISSUED"] = 200] = "ISSUED";
    GatekeeperRecordState[GatekeeperRecordState["ISSUED_EXPIRY_APPROACHING"] = 205] = "ISSUED_EXPIRY_APPROACHING";
    GatekeeperRecordState[GatekeeperRecordState["ISSUED_EXPIRED"] = 426] = "ISSUED_EXPIRED";
    GatekeeperRecordState[GatekeeperRecordState["LOCATION_NOT_SUPPORTED"] = 401] = "LOCATION_NOT_SUPPORTED";
    GatekeeperRecordState[GatekeeperRecordState["ISSUED_LOCATION_NOT_SUPPORTED"] = 412] = "ISSUED_LOCATION_NOT_SUPPORTED";
    GatekeeperRecordState[GatekeeperRecordState["SERVER_FAILURE"] = 500] = "SERVER_FAILURE";
})(GatekeeperRecordState = exports.GatekeeperRecordState || (exports.GatekeeperRecordState = {}));
var GatewayStatus;
(function (GatewayStatus) {
    GatewayStatus[GatewayStatus["UNKNOWN"] = 0] = "UNKNOWN";
    GatewayStatus[GatewayStatus["CHECKING"] = 1] = "CHECKING";
    GatewayStatus[GatewayStatus["NOT_REQUESTED"] = 2] = "NOT_REQUESTED";
    GatewayStatus[GatewayStatus["COLLECTING_USER_INFORMATION"] = 3] = "COLLECTING_USER_INFORMATION";
    GatewayStatus[GatewayStatus["PROOF_OF_WALLET_OWNERSHIP"] = 4] = "PROOF_OF_WALLET_OWNERSHIP";
    GatewayStatus[GatewayStatus["IN_REVIEW"] = 5] = "IN_REVIEW";
    GatewayStatus[GatewayStatus["REJECTED"] = 6] = "REJECTED";
    GatewayStatus[GatewayStatus["REVOKED"] = 7] = "REVOKED";
    GatewayStatus[GatewayStatus["FROZEN"] = 8] = "FROZEN";
    GatewayStatus[GatewayStatus["ACTIVE"] = 9] = "ACTIVE";
    GatewayStatus[GatewayStatus["ERROR"] = 10] = "ERROR";
    GatewayStatus[GatewayStatus["LOCATION_NOT_SUPPORTED"] = 11] = "LOCATION_NOT_SUPPORTED";
    GatewayStatus[GatewayStatus["REFRESH_TOKEN_REQUIRED"] = 12] = "REFRESH_TOKEN_REQUIRED";
    GatewayStatus[GatewayStatus["VALIDATING_USER_INFORMATION"] = 13] = "VALIDATING_USER_INFORMATION";
    GatewayStatus[GatewayStatus["USER_INFORMATION_VALIDATED"] = 14] = "USER_INFORMATION_VALIDATED";
    GatewayStatus[GatewayStatus["USER_INFORMATION_REJECTED"] = 15] = "USER_INFORMATION_REJECTED";
})(GatewayStatus = exports.GatewayStatus || (exports.GatewayStatus = {}));
var TokenIssuanceState;
(function (TokenIssuanceState) {
    TokenIssuanceState[TokenIssuanceState["NOT_REQUESTED"] = 0] = "NOT_REQUESTED";
    TokenIssuanceState[TokenIssuanceState["IN_PROGRESS"] = 1] = "IN_PROGRESS";
    TokenIssuanceState[TokenIssuanceState["COMPLETED"] = 2] = "COMPLETED";
    TokenIssuanceState[TokenIssuanceState["FAILED"] = 3] = "FAILED";
})(TokenIssuanceState = exports.TokenIssuanceState || (exports.TokenIssuanceState = {}));
var CivicPassIssuanceStatus;
(function (CivicPassIssuanceStatus) {
    CivicPassIssuanceStatus[CivicPassIssuanceStatus["NOT_REQUESTED"] = 0] = "NOT_REQUESTED";
    CivicPassIssuanceStatus[CivicPassIssuanceStatus["REQUESTED"] = 1] = "REQUESTED";
    CivicPassIssuanceStatus[CivicPassIssuanceStatus["VERIFIED"] = 2] = "VERIFIED";
    CivicPassIssuanceStatus[CivicPassIssuanceStatus["FAILED"] = 3] = "FAILED";
})(CivicPassIssuanceStatus = exports.CivicPassIssuanceStatus || (exports.CivicPassIssuanceStatus = {}));
var RefreshTokenState;
(function (RefreshTokenState) {
    RefreshTokenState[RefreshTokenState["NOT_REQUIRED"] = 0] = "NOT_REQUIRED";
    RefreshTokenState[RefreshTokenState["CHECK_TOKEN_EXPIRATION"] = 1] = "CHECK_TOKEN_EXPIRATION";
    RefreshTokenState[RefreshTokenState["WAIT_FOR_ON_CHAIN"] = 2] = "WAIT_FOR_ON_CHAIN";
    RefreshTokenState[RefreshTokenState["IN_PROGRESS"] = 3] = "IN_PROGRESS";
    RefreshTokenState[RefreshTokenState["REQUIRES_POWO"] = 4] = "REQUIRES_POWO";
    RefreshTokenState[RefreshTokenState["COMPLETED"] = 5] = "COMPLETED";
    RefreshTokenState[RefreshTokenState["CANCELLED"] = 6] = "CANCELLED";
    RefreshTokenState[RefreshTokenState["FAILED"] = 7] = "FAILED";
})(RefreshTokenState = exports.RefreshTokenState || (exports.RefreshTokenState = {}));
var ChainType;
(function (ChainType) {
    ChainType["SOLANA"] = "solana";
    ChainType["ETHEREUM"] = "ethereum";
    ChainType["CASPER"] = "casper";
})(ChainType = exports.ChainType || (exports.ChainType = {}));
var CivicPassMessageEventResult;
(function (CivicPassMessageEventResult) {
    CivicPassMessageEventResult["SUCCESS"] = "success";
    CivicPassMessageEventResult["FAILURE"] = "failure";
    CivicPassMessageEventResult["CANCELLED"] = "cancelled";
    CivicPassMessageEventResult["IN_PROGRESS"] = "inProgress";
})(CivicPassMessageEventResult = exports.CivicPassMessageEventResult || (exports.CivicPassMessageEventResult = {}));
var CivicPassMessageAction;
(function (CivicPassMessageAction) {
    CivicPassMessageAction["ISSUANCE"] = "issuance";
    CivicPassMessageAction["CONFIRM_TRANSACTION"] = "confirmTransaction";
    CivicPassMessageAction["TOKEN_FROZEN"] = "tokenFrozen";
    CivicPassMessageAction["TOKEN_ACTIVE"] = "tokenActive";
    CivicPassMessageAction["TOKEN_REVOKED"] = "tokenRevoked";
    CivicPassMessageAction["TOKEN_REJECTED"] = "tokenRejected";
    CivicPassMessageAction["TOKEN_IN_REVIEW"] = "tokenInReview";
    CivicPassMessageAction["FAILED_IP_CHECK"] = "failedIpCheck";
    CivicPassMessageAction["REFRESH"] = "refresh";
    CivicPassMessageAction["PROOF_OF_WALLET_OWNERSHIP"] = "proofOfWalletOwnership";
    CivicPassMessageAction["STATUS"] = "status";
})(CivicPassMessageAction = exports.CivicPassMessageAction || (exports.CivicPassMessageAction = {}));
var ValidationStatus;
(function (ValidationStatus) {
    // The validation is in progress
    ValidationStatus["COLLECTING"] = "COLLECTING";
    // The validation is busy processing
    ValidationStatus["PROCESSING"] = "PROCESSING";
    // The validation is in review
    ValidationStatus["IN_REVIEW"] = "IN_REVIEW";
    // The validation is completed successfully
    ValidationStatus["COMPLETED"] = "COMPLETED";
    // The validation failed
    ValidationStatus["FAILED"] = "FAILED";
    // The validation process does not exist
    ValidationStatus["NOT_FOUND"] = "NOT_FOUND";
})(ValidationStatus = exports.ValidationStatus || (exports.ValidationStatus = {}));
