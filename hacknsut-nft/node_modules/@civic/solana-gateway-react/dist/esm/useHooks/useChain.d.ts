import type { Action } from '../useReducer';
import { Chain, RootState, WalletAdapter, GatewayToken } from '../types';
import { NetworkConfig } from '../networkConfig';
export declare type UseChainAction = {
    type: 'tokenOnChainNotFound';
} | {
    type: 'tokenOnChainError';
};
export declare const reducer: (state: RootState, action: Action) => RootState;
declare const useChain: ({ wallet, chainImplementation, networkConfig, }: {
    wallet: WalletAdapter | undefined;
    chainImplementation: Chain;
    networkConfig: NetworkConfig;
}, state: Partial<RootState>, dispatch: React.Dispatch<Action>) => {
    addTokenChangeListeners: (gatewayToken: GatewayToken) => void;
    dispatchTokenFromChain: () => Promise<void>;
};
export default useChain;
