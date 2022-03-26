declare enum Network {
    IGNITE = "ignitePass",
    IGNITE_NFT = "igniteNftPass",
    NILE = "nilePass"
}
declare type ChainNetworkConfig = {
    requiresGatekeeperRecordStatusCheck: boolean;
    tokenExpirationMarginSeconds?: number;
};
export declare type NetworkConfig = {
    requiresGatekeeperRecordStatusCheck: boolean;
    tokenExpirationMarginSeconds: number;
    pollChainIntervalMilliseconds: number;
    pollChainNumberRetries: number;
    waitForTokenRefreshTimoutMilliseconds: number;
};
declare type NetworkConfigs = NetworkConfig & Record<Network, ChainNetworkConfig>;
declare type Configuration = {
    networkAddressMappings: Record<string, Network>;
    networkConfigs: NetworkConfigs;
};
export declare const localConfig: Configuration;
declare const config: ({ gatekeeperNetworkAddress, stage, }: {
    gatekeeperNetworkAddress?: string | undefined;
    stage: string;
}) => NetworkConfig;
export default config;
