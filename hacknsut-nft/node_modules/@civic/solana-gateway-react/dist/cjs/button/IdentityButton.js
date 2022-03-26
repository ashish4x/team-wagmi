"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonMode = void 0;
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const GatewayContext_1 = require("../gateway/GatewayContext");
const IdentityButton_utils_1 = require("./IdentityButton.utils");
const Button = styled_components_1.default.button `
  width: 180px;
  background-color: #282c34;
  outline: none;
  border: 1px solid #434343;
  height: 50px;
  line-height: 20px;
  cursor: pointer;
  position: relative;
  &:disabled {
    opacity: 0.7;
    cursor: default;
  }
  &:active {
    top: 1px;
  }
  &:disabled:active {
    top: 0px;
  }
`;
const buttonTitleStyle = {
    color: 'white',
    fontSize: '16px',
    paddingLeft: '20px',
};
const buttonStyleLight = {
    background: '#fff',
    border: '1px solid #ccc',
};
const buttonTitleStyleLight = {
    color: '#666666',
};
var ButtonMode;
(function (ButtonMode) {
    ButtonMode[ButtonMode["LIGHT"] = 0] = "LIGHT";
    ButtonMode[ButtonMode["DARK"] = 1] = "DARK";
})(ButtonMode = exports.ButtonMode || (exports.ButtonMode = {}));
const IdentityButton = ({ mode = ButtonMode.DARK }) => {
    const { requestGatewayToken, gatewayStatus } = (0, GatewayContext_1.useGateway)();
    return (react_1.default.createElement(Button, { onClick: requestGatewayToken, type: "button", disabled: (0, IdentityButton_utils_1.isDisabled)(gatewayStatus), style: mode === ButtonMode.LIGHT ? Object.assign({}, buttonStyleLight) : {} },
        (0, IdentityButton_utils_1.getIcon)(gatewayStatus),
        react_1.default.createElement("span", { style: mode === ButtonMode.LIGHT ? Object.assign(Object.assign({}, buttonTitleStyle), buttonTitleStyleLight) : buttonTitleStyle }, (0, IdentityButton_utils_1.getButtonText)(gatewayStatus))));
};
exports.default = IdentityButton;
