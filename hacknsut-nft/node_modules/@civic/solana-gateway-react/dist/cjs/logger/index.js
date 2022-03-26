"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const local_logger_1 = __importDefault(require("./local.logger"));
const provider_logger_1 = require("./provider.logger");
const localLogger = new provider_logger_1.LoggingProvider(new local_logger_1.default());
exports.default = localLogger;
