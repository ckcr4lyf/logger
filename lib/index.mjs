export const LOGLEVEL = {
    DEBUG: 0,
    INFO: 1,
    WARN: 2,
    ERROR: 3,
}

const LOGLEVEL_STRING = ['DBG', 'INF', 'WRN', 'ERR'];

export class Logger {
    // TODO: filename etc.
    loglevel = 0;

    constructor(loglevel){
        this.loglevel = loglevel;
    }

    log(loglevel, message){
        const logEntry = {
            ts: (new Date()).toISOString(),
            severity: loglevel,
            message: message,
        };

        const stringFormat = `${logEntry.ts} [${LOGLEVEL_STRING[logEntry.severity]}]: ${logEntry.message}`;

        // If the severity of this message
        // is higher than configured loglevel
        if (loglevel >= this.loglevel){
            console.log(stringFormat)
        }
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
