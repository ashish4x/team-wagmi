"use strict";
/* eslint-disable global-require */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("../logger"));
let clientVersion = '';
const getVersion = () => {
    if (clientVersion)
        return clientVersion;
    try {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const packageJson = require('../../../package.json');
        if (packageJson) {
            clientVersion = `${packageJson.name}:${packageJson.version}`;
        }
    }
    catch (error) {
        logger_1.default.error('Error retrieving version from ../../package.json');
    }
    return clientVersion;
};
exports.default = getVersion;
