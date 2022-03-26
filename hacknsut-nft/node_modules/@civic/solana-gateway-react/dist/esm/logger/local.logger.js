"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */
const provider_logger_1 = require("./provider.logger");
const consoleWithOptionalObject = (method, message, object) => {
    if (object) {
        method(message, object);
    }
    else {
        method(message);
    }
};
class LogLocal extends provider_logger_1.LoggingProvider {
    constructor(logLevel = provider_logger_1.DEFAULT_LOG_LEVEL) {
        super(console, logLevel);
    }
    debug(message, object) {
        consoleWithOptionalObject(this.logger.debug, message, object);
    }
    info(message, object) {
        consoleWithOptionalObject(this.logger.info, message, object);
    }
    warn(message, object) {
        consoleWithOptionalObject(this.logger.warn, message, object);
    }
    error(message, exception) {
        consoleWithOptionalObject(this.logger.error, message, exception);
    }
}
exports.default = LogLocal;
