export const LOGLEVEL = {
    DEBUG: 'DEBUG',
    INFO: 'INFO',
    WARN: 'WARN',
    ERROR: 'ERROR',
}

export class Logger {
    constructor();

    debug(message: string): undefined;

    info(message: string): undefined;

    warn(message: string): undefined;

    error(message: string): undefined;
}
