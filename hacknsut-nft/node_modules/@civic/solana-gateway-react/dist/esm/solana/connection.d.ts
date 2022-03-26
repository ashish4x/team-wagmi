import { ReactNode } from 'react';
import { Connection } from '@solana/web3.js';
export declare const getSolanaConnection: (clusterUrl: string) => Connection;
export declare function SolanaConnectionProvider({ children, endpoint, }: {
    children: ReactNode;
    endpoint: string;
}): JSX.Element;
export declare function useConnection(): Connection;
