import { Config } from '@identity.com/prove-solana-wallet';
import { Cluster } from '@solana/web3.js';
export declare type ExtendedCluster = Cluster | 'civicnet' | 'localnet';
export declare const clusterEndpoint: (cluster: ExtendedCluster) => string;
export declare const urlToCluster: (clusterUrl: string) => ExtendedCluster;
export declare const GATEKEEPER_ENDPOINTS: Record<string, string>;
export declare const getGatekeeperEndpoint: (stage: string) => string;
export declare const makeConfig: (clusterUrl: string) => Config;
