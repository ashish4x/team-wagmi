"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reducer_1 = require("./reducer");
const useGatekeeperRecord_1 = require("../useHooks/useGatekeeperRecord");
const useCivicPass_1 = require("../useHooks/useCivicPass");
const useChain_1 = require("../useHooks/useChain");
const useRefresh_1 = require("../useHooks/useRefresh");
const reducer = (0, reducer_1.combineReducers)(useCivicPass_1.reducer, reducer_1.reducer, useGatekeeperRecord_1.reducer, useChain_1.reducer, useRefresh_1.reducer);
exports.default = reducer;
