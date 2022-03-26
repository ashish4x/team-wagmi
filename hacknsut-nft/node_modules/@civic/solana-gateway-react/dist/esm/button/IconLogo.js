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
exports.IconLogo = void 0;
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/jsx-props-no-spreading */
const react_1 = __importDefault(require("react"));
// eslint-disable-next-line import/prefer-default-export
const IconLogo = (_a) => {
    var props = __rest(_a, []);
    return (react_1.default.createElement("svg", Object.assign({ fill: "#3AB03E", xmlns: "http://www.w3.org/2000/svg", version: "1.1", preserveAspectRatio: "xMidYMid meet", viewBox: "0 0 640 640", width: "640", height: "640" }, props),
        react_1.default.createElement("defs", null,
            react_1.default.createElement("path", { d: "M333.66 83.17C423.79 83.17 502.31 133.47 542.68 207.86C552.6 226.14 575.47 232.92 593.75 223C612.04 213.08 618.82 190.21 608.89 171.93C555.91 74.3 452.58 7.84 333.66 7.84C160.63 7.84 20.53 148.47 20.53 321.73C20.53 494.99 160.63 635.62 333.66 635.62C452.58 635.62 555.91 569.16 608.89 471.53C618.82 453.24 612.04 430.38 593.75 420.45C575.47 410.53 552.6 417.31 542.68 435.59C502.31 509.99 423.79 560.28 333.66 560.28C202.43 560.28 95.86 453.57 95.86 321.73C95.86 189.88 202.43 83.17 333.66 83.17Z", id: "a2ktfY39Yo" }),
            react_1.default.createElement("path", { d: "M372.09 326.17C372.09 332.15 372.09 362.06 372.09 415.89L296.75 415.89C296.75 362.06 296.75 332.15 296.75 326.17C285.19 315.83 277.92 300.79 277.92 284.06C277.92 252.86 303.22 227.56 334.42 227.56C365.62 227.56 390.92 252.86 390.92 284.06C390.92 300.79 383.64 315.83 372.09 326.17Z", id: "a18kAz3CIi" })),
        react_1.default.createElement("g", null,
            react_1.default.createElement("g", null,
                react_1.default.createElement("use", { xlinkHref: "#a2ktfY39Yo", opacity: "1", fillOpacity: "1" }),
                react_1.default.createElement("g", null,
                    react_1.default.createElement("use", { xlinkHref: "#a2ktfY39Yo", opacity: "1", fillOpacity: "0", strokeWidth: "1", strokeOpacity: "0" }))),
            react_1.default.createElement("g", null,
                react_1.default.createElement("use", { xlinkHref: "#a18kAz3CIi", opacity: "1", fillOpacity: "1" }),
                react_1.default.createElement("g", null,
                    react_1.default.createElement("use", { xlinkHref: "#a18kAz3CIi", opacity: "1", fillOpacity: "0", strokeWidth: "1", strokeOpacity: "0" }))))));
};
exports.IconLogo = IconLogo;
