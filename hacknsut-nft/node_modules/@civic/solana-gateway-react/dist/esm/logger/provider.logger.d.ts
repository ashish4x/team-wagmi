export interface LoggingInterface {
    debug: (message: string, object?: unknown) => void;
    info: (message: string, object?: unknown) => void;
    warn: (message: string, object?: unknown) => void;
    error: (message: string, exception?: unknown) => void;
}
export declare const allowLogging: (logLevel: string, atLeastlogLevel: string) => boolean;
export declare const DEFAULT_LOG_LEVEL: string;
export declare class LoggingProvider implements LoggingInterface {
    logger: LoggingInterface;
    logLevel: string;
    constructor(logger: LoggingInterface, logLevel?: string);
    debug(message: string, object?: unknown): void;
    info(message: string, object?: unknown): void;
    warn(message: string, object?: unknown): void;
    error(message: string, exception?: unknown): void;
}
