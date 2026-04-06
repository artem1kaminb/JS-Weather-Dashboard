const HISTORY_KEY = 'weather_history';


export function getHistory() {
    const data = localStorage.getItem(HISTORY_KEY);
    return data ? JSON.parse(data) : [];
}

export function saveToHistory(city) { //функція зберігає назву міста в localStorage
    let history = getHistory();
    // спочатку отримуємо вже існуючий список

    if (!history.includes(city)) {
        // якщо міста немає в списку, додаємо його
        history.push(city); //кидаємо місто в кінесь списку
        localStorage.setItem(HISTORY_KEY, JSON.stringify(history)); //перетворюємо дані в стрічку,щоб localstarage міг їх прийняти
    }
}

