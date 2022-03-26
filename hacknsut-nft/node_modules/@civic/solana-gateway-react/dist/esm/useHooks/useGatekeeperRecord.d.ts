import GatekeeperClient, { GatekeeperRecordResponse } from '../utils/gatekeeperClient';
import { ChainHttpConfig, RootState, WalletAdapter } from '../types';
import type { Action } from '../useReducer';
import { NetworkConfig } from '../networkConfig';
export declare type UseGatekeeperRecordAction = {
    type: 'getGatekeeperRecord';
} | {
    type: 'getGatekeeperRecord_success';
    gatekeeperRecord: GatekeeperRecordResponse;
} | {
    type: 'getGatekeeperRecord_location_not_supported';
    gatekeeperRecord: GatekeeperRecordResponse;
} | {
    type: 'getGatekeeperRecord_issued_location_not_supported';
    gatekeeperRecord: GatekeeperRecordResponse;
} | {
    type: 'getGatekeeperRecord_not_found';
    gatekeeperRecord: GatekeeperRecordResponse;
} | {
    type: 'getGatekeeperRecord_failure';
    gatekeeperRecord: GatekeeperRecordResponse;
};
export declare const reducer: (state: RootState, action: Action) => RootState;
declare const useGetGatekeeperRecord: ({ wallet, gatekeeperClient, httpConfig, networkConfig, }: {
    wallet: WalletAdapter | undefined;
    gatekeeperClient: () => GatekeeperClient;
    httpConfig: ChainHttpConfig;
    networkConfig: NetworkConfig;
}, state: Partial<RootState>, dispatch: React.Dispatch<Action>) => {
    dispatchGatekeeperRecord: () => Promise<void>;
};
export default useGetGatekeeperRecord;
