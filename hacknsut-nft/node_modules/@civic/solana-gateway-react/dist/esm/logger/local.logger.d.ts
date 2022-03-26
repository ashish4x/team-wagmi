import { LoggingProvider } from './provider.logger';
declare class LogLocal extends LoggingProvider {
    constructor(logLevel?: string);
    debug(message: string, object?: unknown): void;
    info(message: string, object?: unknown): void;
    warn(message: string, object?: unknown): void;
    error(message: string, exception?: unknown): void;
}
export default LogLocal;
