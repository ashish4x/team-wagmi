import { CivicPassMessageResponse, GatewayToken, RootState, WalletAdapter } from '../types';
import type { Action } from '../useReducer';
export declare type UseCivicPassIssuanceAction = {
    type: 'civicPass_issuance_success';
    payload: CivicPassMessageResponse;
} | {
    type: 'civicPass_issuance_failure';
} | {
    type: 'civicPass_issuance_cancelled';
} | {
    type: 'civicPass_in_progress';
} | {
    type: 'civicPass_check_token_status';
    token?: GatewayToken;
} | {
    type: 'civicPass_close';
} | {
    type: 'civicPass_refresh_success';
    payload: CivicPassMessageResponse;
} | {
    type: 'civicPass_refresh_failure';
} | {
    type: 'civicPass_refresh_cancelled';
} | {
    type: 'civicPass_check_status';
} | {
    type: 'civicPass_check_status_complete';
    payload: CivicPassMessageResponse;
} | {
    type: 'civicPass_location_not_supported';
};
export declare const reducer: (state: RootState, action: Action) => RootState;
declare const useCivicPass: ({ wallet }: {
    wallet: WalletAdapter | undefined;
}, state: Partial<RootState>, dispatch: React.Dispatch<Action>) => {
    dispatchComplianceEventResult: (response: CivicPassMessageResponse) => void;
};
export default useCivicPass;
