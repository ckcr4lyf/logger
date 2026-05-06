import fs from 'fs';

export const LOGLEVEL = {
    TRACE: -1,
    DEBUG: 0,
    INFO: 1,
    WARN: 2,
    ERROR: 3,
}

const LOGLEVEL_STRING = ['TRA', 'DBG', 'INF', 'WRN', 'ERR'];

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

        const level = LOGLEVEL_STRING[logEntry.severity + 1];
        const line = this.options.format === 'json'
            ? JSON.stringify({ ts: logEntry.ts, level, message })
            : `${logEntry.ts} [${level}]: ${logEntry.message}`;

        // If the severity of this message
        // is higher than configured loglevel
        if (loglevel >= this.options.loglevel){
            console.log(line)

            if (this.options.filename !== undefined){
                fs.appendFileSync(this.options.filename, `${line}\n`);
            }
        }
    }

    trace(message){
        this.log(LOGLEVEL.TRACE, message);
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

export const getLogger = (options = {}) => new Logger(Object.assign({ loglevel: LOGLEVEL.INFO }, options));
