"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gatewayTokenActionCreator = void 0;
const gatewayToken_actionCreator_1 = require("./gatewayToken.actionCreator");
// eslint-disable-next-line import/prefer-default-export
const gatewayTokenActionCreator = (dependencies) => {
    return (0, gatewayToken_actionCreator_1.GatewayTokenActionCreatorImplementation)(dependencies);
};
exports.gatewayTokenActionCreator = gatewayTokenActionCreator;
