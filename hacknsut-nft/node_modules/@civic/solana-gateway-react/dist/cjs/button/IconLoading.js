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
exports.IconLoading = void 0;
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/jsx-props-no-spreading */
const react_1 = __importDefault(require("react"));
// eslint-disable-next-line import/prefer-default-export
const IconLoading = (_a) => {
    var props = __rest(_a, []);
    return (react_1.default.createElement("svg", Object.assign({ width: "120", height: "30", viewBox: "0 0 120 30", xmlns: "http://www.w3.org/2000/svg", fill: "#fff" }, props),
        react_1.default.createElement("circle", { fill: "#3AB03E", cx: "15", cy: "15", r: "15" },
            react_1.default.createElement("animate", { attributeName: "r", from: "15", to: "15", begin: "0s", dur: "0.8s", values: "15;9;15", calcMode: "linear", repeatCount: "indefinite" }),
            react_1.default.createElement("animate", { attributeName: "fill-opacity", from: "1", to: "1", begin: "0s", dur: "0.8s", values: "1;.5;1", calcMode: "linear", repeatCount: "indefinite" })),
        react_1.default.createElement("circle", { fill: "#3AB03E", cx: "60", cy: "15", r: "9", fillOpacity: "0.3" },
            react_1.default.createElement("animate", { attributeName: "r", from: "9", to: "9", begin: "0s", dur: "0.8s", values: "9;15;9", calcMode: "linear", repeatCount: "indefinite" }),
            react_1.default.createElement("animate", { attributeName: "fill-opacity", from: "0.5", to: "0.5", begin: "0s", dur: "0.8s", values: ".5;1;.5", calcMode: "linear", repeatCount: "indefinite" })),
        react_1.default.createElement("circle", { fill: "#3AB03E", cx: "105", cy: "15", r: "15" },
            react_1.default.createElement("animate", { attributeName: "r", from: "15", to: "15", begin: "0s", dur: "0.8s", values: "15;9;15", calcMode: "linear", repeatCount: "indefinite" }),
            react_1.default.createElement("animate", { attributeName: "fill-opacity", from: "1", to: "1", begin: "0s", dur: "0.8s", values: "1;.5;1", calcMode: "linear", repeatCount: "indefinite" }))));
};
exports.IconLoading = IconLoading;
