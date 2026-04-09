import { fetchWeather } from './api.js';
import { saveToHistory, getHistory } from './storage.js';
import { ui } from './ui.js';
import { logger } from './logger.js';

export function startApp(){
    const searchBtn = document.getElementById('search-btn');
    const cityInput = document.getElementById('city-input');

    async function handleSearch(city) { //обробка пошуку
        if (!city) return; //якщо поле порежнє то нічого немає
        logger.info('Initiating weather search', { city });

        try {
            const data = await fetchWeather(city); //запис даних 
            ui.renderWeather(data);//показ результату
            saveToHistory(data.name);//збереження результату пошуку
            refreshHistory();//список історії оновлюється
        } catch (err) {
            logger.error('Search failed', err.message);
            ui.showError(err.message);//помилка при поганому плині подій
        }
    }

    function refreshHistory() { //оновлення історії та кліки по списку
        const history = getHistory();
        logger.info('Refreshing history list', { count: history.length });
        ui.renderHistory(history, (city) => {
            logger.info('City selected from history', { city });
            cityInput.value = city; // якщо клік - місто відправляється в інпут
            handleSearch(city); //пошук міста 
        });
    }


    searchBtn.addEventListener('click', () => handleSearch(cityInput.value)); //моніторинг кліку на кнопку пошук


    refreshHistory(); //якщо вже були пошуки погоди то виводимо цю історію (при запускові)
}