import { GatewayToken } from '../types';
export declare const hasExpired: (expiryTime: number) => boolean;
export declare const isTokenRefreshRequired: ({ gatewayToken, tokenExpirationMarginSeconds, }: {
    gatewayToken: GatewayToken;
    tokenExpirationMarginSeconds: number;
}) => boolean;
export declare const getTokenRefreshIntervalMilliseconds: (expiryTime: number, tokenExpirationMarginSeconds: number) => number;
