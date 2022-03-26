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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importStar(require("styled-components"));
const svgLoadingStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
};
const shimmer = (0, styled_components_1.keyframes) `
  0% {
    transform: translate(-320px, 0);
  }

  to {
    transform: translate(320px, 0);
  }
`;
const Shimmer = styled_components_1.default.path `
  animation: 1s linear infinite both ${shimmer};
`;
function SVGLoading() {
    return (react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", shapeRendering: "geometricPrecision", textRendering: "geometricPrecision", viewBox: "0 0 320 16", "white-space": "pre", height: "26", width: "100%", style: Object.assign(Object.assign({}, svgLoadingStyle), { position: 'absolute' }) },
        react_1.default.createElement("defs", null,
            react_1.default.createElement("linearGradient", { id: "Gradient-0", x2: "320", y1: "15", y2: "15", gradientUnits: "userSpaceOnUse" },
                react_1.default.createElement("stop", { offset: "0", stopColor: "#ffffff" }),
                react_1.default.createElement("stop", { offset: ".511", stopColor: "#9A9DA6" }),
                react_1.default.createElement("stop", { offset: "1", stopColor: "#ffffff" }))),
        react_1.default.createElement("path", { id: "rect", fill: "#f6f7f8", d: "M0 0h320v16H0z" }),
        react_1.default.createElement(Shimmer, { id: "shimmer", fill: "url(#Gradient-0)", d: "M0 0h320v16H0z", transform: "translate(-320)" })));
}
exports.default = SVGLoading;
