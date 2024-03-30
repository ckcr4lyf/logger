type LOGLEVEL = -1 | 0 | 1 | 2 | 3;

export const LOGLEVEL: Record<'TRACE' | 'DEBUG' | 'INFO' | 'WARN' | 'ERROR', LOGLEVEL>;

export type LoggerOptions = {
    loglevel: LOGLEVEL,
    filename?: string,
}

export class Logger {

    loglevel: LOGLEVEL;

    constructor(options: LoggerOptions);

    trace(message: string): undefined;
    
    debug(message: string): undefined;

    info(message: string): undefined;

    warn(message: string): undefined;

    error(message: string): undefined;
}
