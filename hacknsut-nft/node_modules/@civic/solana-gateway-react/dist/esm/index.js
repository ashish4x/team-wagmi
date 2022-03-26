"use strict";
/* eslint-disable no-console */
/* eslint-disable global-require */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGateway = exports.GatewayProvider = exports.Badge = exports.ButtonMode = exports.getTokenDescription = exports.IdentityButton = exports.GatewayStatus = void 0;
const version_1 = __importDefault(require("./utils/version"));
var types_1 = require("./types");
Object.defineProperty(exports, "GatewayStatus", { enumerable: true, get: function () { return types_1.GatewayStatus; } });
var button_1 = require("./button");
Object.defineProperty(exports, "IdentityButton", { enumerable: true, get: function () { return button_1.IdentityButton; } });
Object.defineProperty(exports, "getTokenDescription", { enumerable: true, get: function () { return button_1.getTokenDescription; } });
Object.defineProperty(exports, "ButtonMode", { enumerable: true, get: function () { return button_1.ButtonMode; } });
// These will be moved into the Solana Project once we add another chain implementation
var badge_1 = require("./solana/badge");
Object.defineProperty(exports, "Badge", { enumerable: true, get: function () { return __importDefault(badge_1).default; } });
var solana_1 = require("./solana");
Object.defineProperty(exports, "GatewayProvider", { enumerable: true, get: function () { return solana_1.SolanaGatewayProvider; } });
Object.defineProperty(exports, "useGateway", { enumerable: true, get: function () { return solana_1.useSolanaGateway; } });
console.log(`${(0, version_1.default)()}`);
