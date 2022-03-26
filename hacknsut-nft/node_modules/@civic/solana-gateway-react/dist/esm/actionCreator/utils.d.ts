export declare const sleep: (ms: number) => Promise<void>;
export declare const pollUntilConditionMet: <T extends unknown>(fnToRun: () => Promise<unknown>, conditionChecker: (arg0: T) => boolean, interval?: number, retries?: number) => Promise<T>;
