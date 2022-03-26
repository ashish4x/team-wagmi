"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SOLANA_TIMEOUT_FINALIZED = exports.SOLANA_TIMEOUT_CONFIRMED = exports.SOLANA_TIMEOUT_PROCESSED = exports.DEFAULT_SOLANA_RETRIES = exports.SOLANA_COMMITMENT = exports.GATEWAY_TOKEN_ADDRESS_SEED = exports.GATEKEEPER_NONCE_SEED_STRING = exports.PROGRAM_ID = void 0;
const web3_js_1 = require("@solana/web3.js");
// Should equal the contents of solana/program/program-id.md
exports.PROGRAM_ID = new web3_js_1.PublicKey("gatem74V238djXdzWnJf94Wo1DcnuGkfijbf3AuBhfs");
exports.GATEKEEPER_NONCE_SEED_STRING = "gatekeeper"; // must match get_inbox_address_with_seed in state.rs
exports.GATEWAY_TOKEN_ADDRESS_SEED = "gateway"; // must match get_inbox_address_with_seed in state.rs
exports.SOLANA_COMMITMENT = "confirmed";
exports.DEFAULT_SOLANA_RETRIES = 3;
// Timeouts vary depending on the commitment.
exports.SOLANA_TIMEOUT_PROCESSED = 3000;
exports.SOLANA_TIMEOUT_CONFIRMED = 7000;
exports.SOLANA_TIMEOUT_FINALIZED = 10000;
//# sourceMappingURL=constants.js.map