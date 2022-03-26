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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonMode = exports.getTokenDescription = exports.IdentityButton = void 0;
const IdentityButton_1 = __importStar(require("./IdentityButton"));
exports.IdentityButton = IdentityButton_1.default;
Object.defineProperty(exports, "ButtonMode", { enumerable: true, get: function () { return IdentityButton_1.ButtonMode; } });
const IdentityButton_utils_1 = require("./IdentityButton.utils");
Object.defineProperty(exports, "getTokenDescription", { enumerable: true, get: function () { return IdentityButton_utils_1.getTokenDescription; } });
