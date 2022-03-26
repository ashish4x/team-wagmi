"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const react_1 = __importDefault(require("react"));
function SVGClose({ color = '#777777', light = false }) {
    const fillStyle = light ? '#FFFFFF' : color;
    return (react_1.default.createElement("svg", { width: "17", height: "17", viewBox: "0 0 17 17", fill: fillStyle, xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("path", { d: "M14.0082 0.865234L8.00683 6.86523L2.00683 0.865234L0.00683594 2.86523L6.00683 8.86523L0.00683594 14.8652L2.00683 16.8652L8.00683 10.8652L14.0082 16.8652L16.0082 14.8652L10.0082 8.86523L16.0082 2.86523L14.0082 0.865234Z" })));
}
exports.default = SVGClose;
