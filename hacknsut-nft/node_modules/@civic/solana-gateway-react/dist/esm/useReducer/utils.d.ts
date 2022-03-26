import { GatewayStatus, RootState, GatewayToken } from '../types';
export declare const resetState: (state: RootState) => RootState;
export declare const statusFromToken: (state: RootState, gatewayToken?: GatewayToken | undefined) => GatewayStatus;
