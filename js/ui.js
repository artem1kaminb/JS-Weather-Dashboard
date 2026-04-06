export const ui = { //Відображає дані про погоду в блоці
    renderWeather(data) {
        const container = document.getElementById('weather-info');
        container.classList.remove('hidden');
        container.innerHTML = `
        
            <h2>${data.name}</h2>
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
            <p class="temp">${Math.round(data.main.temp)}°C</p>
            <p>Вологість: ${data.main.humidity}%</p>
            <p>${data.weather[0].description}</p>
        `;
        //container.innerHTML Створює HTML-структуру всередині контейнера, підставляючи дані з API
    },

    renderHistory(history, onHistoryClick) { //створення списку історії із назвами міст з можливостю взаємодії у вигляді кліку 
        const list = document.getElementById('history-list');
        list.innerHTML = '';
        history.forEach(city => {
            const li = document.createElement('li'); //  новий елемент html <li>
            li.textContent = city; // записує назву міста як текст
            li.addEventListener('click', () => onHistoryClick(city)); //при кліку на місто спрацює колбек
            list.appendChild(li);// Додає створений елемент у список на сторінці
        });
    },

    showError(msg) { //сповіщення при помилці
        alert(msg);
    }
};