import pino from 'pino';

const isDev = import.meta.env.DEV;

// Ініціалізація Pino 
const log = pino({
    browser: {
        asObject: true //  об'єкти в консолі можна розгортати мишкою
    }
});

export const logger = {
    /** @param {string} message - Опис події @param {any} [data=''] - Додаткові дані */
    info(message, data = '') { 
        log.info({ contextData: data }, message);
    },

    /** @param {string} message - Контекст помилки @param {Error|string} error - Об'єкт помилки/виключення*/
    error(message, error) { 
        log.error({ err: error }, message);
    },

    /** Виводить попередження @param {string} message - Текст попередження.*/
    warn(message) { 
        log.warn(message);
    }
};