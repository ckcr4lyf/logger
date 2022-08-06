# logger

Just made this so I can `npm install` a very opinionated logger I wrote myself, rather than duplicating it in every project inconsistently.

Current inconsistent writes:

* [qbit-race](https://github.com/ckcr4lyf/qbit-race/blob/95edf122962882dc7671b0e07e8f6ef119a26390/src/helpers/logger.ts)
* [kouko](https://github.com/ckcr4lyf/kouko/blob/f37dd990f616a97a5772aa60b406e1bcda7a934c/source/helpers/logger.ts)
* [bacryptup-server](https://github.com/ckcr4lyf/bacryptup-server/blob/06018964fc88b2d05b9b94a12b36bc0ce48bf522/source/utilities/logger.ts)
* [statement-rip](https://github.com/ckcr4lyf/statement-rip/blob/e0d6c3046e30f7691dc1e0307da01b6fb423868f/src/utils/logger.ts)

ugh..


## Design Philosophy

### Just be a highly configurable class

The actual logger will have many options etc. that are all optional to be passed in. On the base, just expose the class and a very naive `getLogger()` function to instantiate one,

### Configuration helper in the parent project

If a project wants to use it, they can write a `getLogger()` wrapper to create a new class, with params that it prefers, such as:

* Log to a file
* Log file location
* Log format (probably just one of JSON or vanilla string)

This was if just stdio logging is required that is easily possible, but if a project wants to log to files with logic around append vs. truncate or such, its upto them to implement it.
