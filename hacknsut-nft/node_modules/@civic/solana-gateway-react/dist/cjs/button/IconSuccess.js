"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconSuccess = void 0;
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/jsx-props-no-spreading */
const react_1 = __importDefault(require("react"));
// eslint-disable-next-line import/prefer-default-export
const IconSuccess = (_a) => {
    var props = __rest(_a, []);
    return (react_1.default.createElement("svg", Object.assign({ id: "Layer_1", 
        // style={{ enableBackground: 'new 0 0 292.359 292.359' }}
        version: "1.1", viewBox: "0 0 128 128", xmlns: "http://www.w3.org/2000/svg" }, props),
        react_1.default.createElement("g", null,
            react_1.default.createElement("circle", { fill: "#31AF91", cx: "64", cy: "64", r: "64" })),
        react_1.default.createElement("g", null,
            react_1.default.createElement("path", { fill: "#FFFFFF", cx: "64", cy: "64", r: "64", d: "M54.3,97.2L24.8,67.7c-0.4-0.4-0.4-1,0-1.4l8.5-8.5c0.4-0.4,1-0.4,1.4,0L55,78.1l38.2-38.2   c0.4-0.4,1-0.4,1.4,0l8.5,8.5c0.4,0.4,0.4,1,0,1.4L55.7,97.2C55.3,97.6,54.7,97.6,54.3,97.2z" }))));
};
exports.IconSuccess = IconSuccess;
