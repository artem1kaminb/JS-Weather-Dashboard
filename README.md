# JS Weather Dashboard

Програмне забезпечення для моніторингу погодних умов у реальному часі.
Проект реалізовано на мові JavaScript 
Separation of Concerns архітектура

#Функціонал 

* Отримання актуальних метеорологічних даних через REST API OpenWeatherMap.
* Збереження історії пошукових запитів у локальному сховищі браузера (LocalStorage).
* Асинхронна обробка мережевих запитів без блокування головного потоку (Event Loop).
* Динамічне оновлення DOM-структури на основі отриманих JSON-об'єктів.


-Середовище збірки : Node.js <інструмент для збірки : Vite 5.x>
-Зова програмування JavaScript
-Зовнішні API : OpenWeatherMap API


посилання/команда для клонування репозиторію : git clone https://github.com/artem1kaminb/JS-Weather-Dashboard.git
Після клонування:
- cd js-weather-dashboard відкриття потрібної директорії
- npm install створення звязків
- створіть файл .env в корені проекту, піісля чого надайте значення
VITE_WEATHER_API_KEY= 'твій_діючий_ключ_openweathermap'
VITE_WEATHER_BASE_URL= 'https://api.openweathermap.org/data/2.5/weather'
- npm run dev запуск


`index.html` — головна сторінка.
`style.css` — стилізація .
`js/api.js` — модуль для роботи з мережевими запитами (fetch).
`js/storage.js` — логіка роботи з LocalStorage.
`js/ui.js` — маніпуляції з інтерфейсом.
`main.js` —  координація роботи всіх модулів.
