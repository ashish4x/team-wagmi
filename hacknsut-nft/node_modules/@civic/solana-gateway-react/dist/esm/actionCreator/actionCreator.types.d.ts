import { WalletAdapter, Chain } from '../types';
import GatekeeperClient from '../utils/gatekeeperClient';
import type { Action } from '../useReducer';
import { NetworkConfig } from '../networkConfig';
export declare type GatewayTokenActionCreatorDependencies = {
    wallet: WalletAdapter;
    chainImplementation: Chain;
    gatekeeperClient: () => GatekeeperClient;
    dispatch: (value: Action) => void;
    networkConfig: NetworkConfig;
};
