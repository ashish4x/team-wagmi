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
exports.IconError = void 0;
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/jsx-props-no-spreading */
const react_1 = __importDefault(require("react"));
// eslint-disable-next-line import/prefer-default-export
const IconError = (_a) => {
    var props = __rest(_a, []);
    return (react_1.default.createElement("svg", Object.assign({ height: "60", viewBox: "0 0 60 60", width: "60", xmlns: "http://www.w3.org/2000/svg" }, props),
        react_1.default.createElement("path", { fill: "#9f4c4c", fillRule: "evenodd", d: "M390.774,690a3.994,3.994,0,0,1,2.824,1.17l15.231,15.23A4,4,0,0,1,410,709.233v21.534a4,4,0,0,1-1.172,2.831L393.6,748.828A3.989,3.989,0,0,1,390.774,750H369.225a3.989,3.989,0,0,1-2.824-1.171l-15.23-15.23A3.994,3.994,0,0,1,350,730.767V709.233a4,4,0,0,1,1.173-2.832l15.23-15.23a3.994,3.994,0,0,1,2.824-1.17h21.549ZM395,729.951A3.406,3.406,0,0,1,395,734.77l-0.22.22a3.42,3.42,0,0,1-4.833,0l-8.764-8.755a1.71,1.71,0,0,0-2.417,0l-8.741,8.746a3.417,3.417,0,0,1-4.836,0l-0.194-.193a3.408,3.408,0,0,1,.017-4.842l8.834-8.735a1.7,1.7,0,0,0,0-2.43l-8.831-8.725a3.409,3.409,0,0,1-.018-4.844l0.193-.193a3.411,3.411,0,0,1,2.418-1c0.944,0,3.255,1.835,3.872,2.455l7.286,7.287a1.708,1.708,0,0,0,2.417,0l8.764-8.748a3.417,3.417,0,0,1,4.831,0L395,705.243a3.406,3.406,0,0,1,0,4.818l-8.727,8.737a1.7,1.7,0,0,0,0,2.407Z", id: "error", transform: "translate(-350 -690)" })));
};
exports.IconError = IconError;
