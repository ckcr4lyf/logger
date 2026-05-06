import { getLogger } from '../lib/index.mjs';

const logger = getLogger({ format: 'json' });
logger.info('message', { extra: true });
