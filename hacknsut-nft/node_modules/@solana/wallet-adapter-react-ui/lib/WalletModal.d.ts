import { FC, ReactNode } from 'react';
export interface WalletModalProps {
    className?: string;
    logo?: ReactNode;
    featuredWallets?: number;
    container?: string;
}
export declare const WalletModal: FC<WalletModalProps>;
