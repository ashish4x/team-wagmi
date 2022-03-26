import { SolanaWalletAdapter } from './solana/types';
export type { Options } from './types';
export { GatewayStatus } from './types';
export { IdentityButton, getTokenDescription, ButtonMode } from './button';
export { default as Badge } from './solana/badge';
export { SolanaGatewayProvider as GatewayProvider, useSolanaGateway as useGateway } from './solana';
export declare type WalletAdapter = SolanaWalletAdapter;
export type { SolanaGatewayProps as GatewayProps, SolanaGatewayProviderProps as GatewayProviderProps, } from './solana/types';
