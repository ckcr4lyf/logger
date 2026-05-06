type LOGLEVEL = -1 | 0 | 1 | 2 | 3;

export const LOGLEVEL: Record<'TRACE' | 'DEBUG' | 'INFO' | 'WARN' | 'ERROR', LOGLEVEL>;

export type LogFormat = 'simple' | 'json';

export type LoggerOptions = {
    loglevel: LOGLEVEL,
    filename?: string,
    format?: LogFormat,
}

export class Logger {

    loglevel: LOGLEVEL;

    constructor(options: LoggerOptions);

    trace(message: string, meta?: any): undefined;
    
    debug(message: string, meta?: any): undefined;

    info(message: string, meta?: any): undefined;

    warn(message: string, meta?: any): undefined;

    error(message: string, meta?: any): undefined;
}

export function getLogger(options?: Partial<LoggerOptions>): Logger;
