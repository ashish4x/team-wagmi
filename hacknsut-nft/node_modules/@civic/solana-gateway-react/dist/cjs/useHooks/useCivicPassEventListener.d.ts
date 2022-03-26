import { CivicSignEventTypeRequest, RemoteSign } from '../utils/remoteSign';
import { Chain, WalletAdapter } from '../types';
declare const useCivicPassEventListener: ({ wallet, chainImplementation, remoteSign, }: {
    wallet: WalletAdapter | undefined;
    chainImplementation: Chain;
    remoteSign?: RemoteSign | undefined;
}) => {
    dispatchEvent: (event: CivicSignEventTypeRequest) => void;
};
export default useCivicPassEventListener;
