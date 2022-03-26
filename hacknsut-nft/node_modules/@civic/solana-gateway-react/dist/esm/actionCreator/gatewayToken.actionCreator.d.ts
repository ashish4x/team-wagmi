import { GatewayTokenActionCreatorDependencies } from './actionCreator.types';
export interface GatewayTokenActionCreator {
    waitForGatewayToken: () => Promise<void>;
}
declare const GatewayTokenActionCreatorImplementation: ({ wallet, chainImplementation, gatekeeperClient, dispatch, networkConfig, }: GatewayTokenActionCreatorDependencies) => GatewayTokenActionCreator;
export { GatewayTokenActionCreatorImplementation };
