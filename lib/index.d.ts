type LOGLEVEL = 0 | 1 | 2 | 3;

export const LOGLEVEL: Record<'DEBUG' | 'INFO' | 'WARN' | 'ERROR', LOGLEVEL>;

export class Logger {

    loglevel: LOGLEVEL;

    constructor(loglevel: LOGLEVEL);

    debug(message: string): undefined;

    info(message: string): undefined;

    warn(message: string): undefined;

    error(message: string): undefined;
}
