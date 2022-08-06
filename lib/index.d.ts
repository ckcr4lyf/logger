type LOGLEVEL = 0 | 1 | 2 | 3;

export const LOGLEVEL: Record<'DEBUG' | 'INFO' | 'WARN' | 'ERROR', LOGLEVEL> = {
    'DEBUG': 0,
    'INFO': 1,
    'WARN': 2,
    'ERROR': 3,
}

export class Logger {

    loglevel: LOGLEVEL;

    constructor(loglevel: LOGLEVEL);

    debug(message: string): undefined;

    info(message: string): undefined;

    warn(message: string): undefined;

    error(message: string): undefined;
}
