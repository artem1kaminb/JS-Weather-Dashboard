const isDev = import.meta.env.DEV; //визначає чи в нас режим розробки 'npm run dev' чи 'npm run build' 

export const logger = { //логування подій програми

    /** @param {string} message - Опис події @param {any} [data=''] - Додаткові дані */

    info(message, data = '') { 
        if (isDev) {
            console.log(`[INFO] ${new Date().toISOString()}: ${message}`, data); //ISO формат часу для точності часових міток «рік-місяць-день»
        }
    },

    /** @param {string} message - Контекст помилки@param {Error|string} error - Об'єкт помилки/виключення*/

    error(message, error) { 
        console.error(`[ERROR] ${new Date().toISOString()}: ${message}`, error); //логування помилок
    },

    /** Виводить попередження @param {string} message - Текст попередження.*/

    warn(message) { 
        if (isDev) {
            console.warn(`[WARN] ${message}`);
        }
    }
};