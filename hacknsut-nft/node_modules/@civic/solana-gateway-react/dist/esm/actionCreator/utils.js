"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pollUntilConditionMet = exports.sleep = void 0;
const logger_1 = __importDefault(require("../logger"));
const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};
exports.sleep = sleep;
const pollUntilConditionMet = async (fnToRun, conditionChecker, interval = 2000, retries = 20) => {
    if (retries <= 0) {
        logger_1.default.debug('WaitForStatusChange - no more retries');
        throw new Error(`pollUntilConditionMet all retries used calling ${fnToRun}`);
    }
    logger_1.default.debug(`calling ${fnToRun.name} retries = ${retries}`);
    const result = (await fnToRun());
    if (conditionChecker(result)) {
        return result;
    }
    logger_1.default.debug(`Waiting ${interval}ms before running ${fnToRun.name} and checking condition ${conditionChecker}`);
    await (0, exports.sleep)(interval);
    return (0, exports.pollUntilConditionMet)(fnToRun, conditionChecker, interval, retries - 1);
};
exports.pollUntilConditionMet = pollUntilConditionMet;
