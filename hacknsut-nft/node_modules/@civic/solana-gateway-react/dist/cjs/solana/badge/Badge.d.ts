import { PublicKey, Cluster as SolanaCluster, Connection } from '@solana/web3.js';
import React from 'react';
declare type ExtendedCluster = SolanaCluster | 'civicnet' | 'localnet';
export declare type BadgeProps = {
    gatekeeperNetwork: PublicKey;
    publicKey: PublicKey;
    clusterName?: ExtendedCluster;
    connection?: Connection;
};
declare const Badge: React.FC<BadgeProps>;
export default Badge;
