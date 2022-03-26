import { GatewayToken, RootState, WalletAdapter } from '../types';
import type { Action } from '../useReducer';
export declare type UseUserInteractionAction = {
    type: 'userInteraction_check_gatewayToken_status';
    token?: GatewayToken;
};
declare const useUserInteraction: ({ wallet }: {
    wallet: WalletAdapter | undefined;
}, state: RootState, dispatch: React.Dispatch<Action>) => {
    requestGatewayToken: () => Promise<void>;
};
export default useUserInteraction;
