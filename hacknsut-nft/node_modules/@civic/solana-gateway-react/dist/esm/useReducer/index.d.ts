import { UseGatekeeperRecordAction } from '../useHooks/useGatekeeperRecord';
import { UseCivicPassIssuanceAction } from '../useHooks/useCivicPass';
import { UseChainAction } from '../useHooks/useChain';
import { UseRefreshAction } from '../useHooks/useRefresh';
import { AppAction } from './action';
import { UseUserInteractionAction } from '../useHooks/useUserInteraction';
declare const reducer: (state: import("../types").RootState, action: Action) => import("../types").RootState;
export declare type Action = UseGatekeeperRecordAction | UseChainAction | AppAction | UseCivicPassIssuanceAction | UseRefreshAction | UseUserInteractionAction;
export default reducer;
