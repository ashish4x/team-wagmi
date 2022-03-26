"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggingProvider = exports.DEFAULT_LOG_LEVEL = exports.allowLogging = void 0;
const logLevels = ['debug', 'info', 'warn', 'error'];
const allowLogging = (logLevel, atLeastlogLevel) => logLevels.indexOf(logLevel) <= logLevels.indexOf(atLeastlogLevel);
exports.allowLogging = allowLogging;
exports.DEFAULT_LOG_LEVEL = process.env.REACT_APP_LOG_LEVEL || 'warn';
class LoggingProvider {
    constructor(logger, logLevel = exports.DEFAULT_LOG_LEVEL) {
        this.logger = logger;
        if (typeof window !== 'undefined') {
            const urlSearchParams = new URLSearchParams(window.location.search);
            const urllogLevel = urlSearchParams.get('logLevel');
            this.logLevel = urllogLevel || logLevel;
        }
        else {
            this.logLevel = logLevel;
        }
    }
    debug(message, object) {
        if ((0, exports.allowLogging)(this.logLevel, 'debug'))
            this.logger.debug(message, object);
    }
    info(message, object) {
        if ((0, exports.allowLogging)(this.logLevel, 'info'))
            this.logger.info(message, object);
    }
    warn(message, object) {
        if ((0, exports.allowLogging)(this.logLevel, 'warn'))
            this.logger.warn(message, object);
    }
    error(message, exception) {
        if ((0, exports.allowLogging)(this.logLevel, 'error'))
            this.logger.error(message, exception);
    }
}
exports.LoggingProvider = LoggingProvider;
