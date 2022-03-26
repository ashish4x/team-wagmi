/// <reference types="react" />
import { GatewayStatus } from '../types';
export declare const getIcon: (status: GatewayStatus | null | undefined) => JSX.Element;
export declare const getButtonText: (status: GatewayStatus | null | undefined) => string;
export declare const isDisabled: (state: GatewayStatus | null | undefined) => boolean;
export declare const getTokenDescription: (status: GatewayStatus | null | undefined) => string;
