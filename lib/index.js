export const LOGLEVEL = {
    DEBUG: 'DEBUG',
    INFO: 'INFO',
    WARN: 'WARN',
    ERROR: 'ERROR',
};

export class Logger {
    // TODO: filename etc.
    constructor(){

    }

    log(loglevel, message){
        const logEntry = {
            ts: (new Date()).toISOString(),
            severity: loglevel,
            message: message,
        };

        const stringFormat = `${logEntry.ts} [${logEntry.severity}]: ${logEntry.message}`;

        console.log(stringFormat)
    }

    debug(message){
        this.log(LOGLEVEL.DEBUG, message);
    }

    info(message){
        this.log(LOGLEVEL.INFO, message);
    }

    warn(message){
        this.log(LOGLEVEL.WARN, message);
    }

    error(message){
        this.log(LOGLEVEL.ERROR, message);
    }
}