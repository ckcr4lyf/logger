import fs from 'fs';

export const LOGLEVEL = {
    DEBUG: 0,
    INFO: 1,
    WARN: 2,
    ERROR: 3,
}

const LOGLEVEL_STRING = ['DBG', 'INF', 'WRN', 'ERR'];

export class Logger {
    /**
     * 
     * @param { import("./index").LoggerOptions } options 
     */
    constructor(options){
        this.options = options;
    }

    log(loglevel, message){
        const logEntry = {
            ts: (new Date()).toISOString(),
            severity: loglevel,
            message: message,
        };

        // 2022-08-06T05:07:26.813Z [INFO]: Starting
        const stringFormat = `${logEntry.ts} [${LOGLEVEL_STRING[logEntry.severity]}]: ${logEntry.message}`;

        // If the severity of this message
        // is higher than configured loglevel
        if (loglevel >= this.options.loglevel){
            console.log(stringFormat)

            if (this.options.filename !== undefined){
                fs.appendFileSync(this.options.filename, `${stringFormat}\n`);
            }
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
