import { createContext, useContext } from 'react';
export const WalletDialogContext = createContext({});
export function useWalletDialog() {
    return useContext(WalletDialogContext);
}
//# sourceMappingURL=useWalletDialog.js.map