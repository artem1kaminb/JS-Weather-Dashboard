const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = import.meta.env.VITE_WEATHER_BASE_URL; // Отримуємо ключ та посилання  з файлу .env через Vite 


/**
 * Отримує дані про погоду з OpenWeather API ,  city - Назва міста, яку ввів користувач
 */
export async function fetchWeather(city) {
    const url = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric&lang=ua`; 
    //повний шлях запиту місто + ключ + одиниці вимірювання + мова
    
    const response = await fetch(url);
    // запит і очікування відповіді від сервера

    if (!response.ok) {
        throw new Error('Місто не знайдено');
    }
    // Перевіряємо статус відповіді
    
    return await response.json(); // Повертає звичайний JS об'єкт
}