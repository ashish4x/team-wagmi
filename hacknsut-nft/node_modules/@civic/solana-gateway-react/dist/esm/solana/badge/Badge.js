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
const solana_gateway_ts_1 = require("@identity.com/solana-gateway-ts");
const react_1 = __importStar(require("react"));
const constants_1 = __importDefault(require("./constants"));
const config_1 = require("../config");
const connection_1 = require("../connection");
const Badge_svg_1 = __importDefault(require("./Badge.svg"));
// Used to avoid making multiple blockchain calls when rerendering
function usePrevious(value) {
    const ref = (0, react_1.useRef)();
    (0, react_1.useEffect)(() => {
        ref.current = value;
    }, [value]); // Only re-run if value changes
    // Return previous value (happens before update in useEffect above)
    return ref.current;
}
const Badge = ({ connection, gatekeeperNetwork, publicKey, clusterName = 'mainnet-beta' }) => {
    const [token, setToken] = (0, react_1.useState)();
    const prevGKN = usePrevious(gatekeeperNetwork === null || gatekeeperNetwork === void 0 ? void 0 : gatekeeperNetwork.toBase58());
    const prevPubkey = usePrevious(publicKey === null || publicKey === void 0 ? void 0 : publicKey.toBase58());
    const prevClusterName = usePrevious(clusterName);
    (0, react_1.useEffect)(() => {
        // only make another call if anything changes, as we cannot
        // rely on useEffect to protect us from this
        if ((gatekeeperNetwork === null || gatekeeperNetwork === void 0 ? void 0 : gatekeeperNetwork.toBase58()) !== prevGKN ||
            (publicKey === null || publicKey === void 0 ? void 0 : publicKey.toBase58()) !== prevPubkey ||
            clusterName !== prevClusterName) {
            const clusterUrl = (0, config_1.clusterEndpoint)(clusterName);
            const normalizedConnection = connection || (0, connection_1.getSolanaConnection)(clusterUrl);
            // only set the GT if one was found
            (0, solana_gateway_ts_1.findGatewayToken)(normalizedConnection, publicKey, gatekeeperNetwork).then((gt) => setToken(gt || undefined));
        }
    }, [gatekeeperNetwork === null || gatekeeperNetwork === void 0 ? void 0 : gatekeeperNetwork.toBase58(), publicKey === null || publicKey === void 0 ? void 0 : publicKey.toBase58(), clusterName, connection]);
    if (!constants_1.default.includes(gatekeeperNetwork.toBase58())) {
        return react_1.default.createElement(react_1.default.Fragment, null);
    }
    return (token === null || token === void 0 ? void 0 : token.state) === solana_gateway_ts_1.State.ACTIVE ? (react_1.default.createElement("a", { href: "https://www.civic.com", target: "_blank", rel: "noreferrer", "data-testid": "badgeLink" },
        react_1.default.createElement(Badge_svg_1.default, null))) : (react_1.default.createElement(react_1.default.Fragment, null));
};
exports.default = Badge;
