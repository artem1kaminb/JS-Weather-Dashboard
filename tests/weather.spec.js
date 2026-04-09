import { test, expect } from '@playwright/test';

test.describe('Weather Dashboard E2E', () => {

  test('Пошук погоди та перевірка історії', async ({ page }) => {
    
    // Перехоплюємо запит до OpenWeather, щоб тест був швидким і безкоштовним
    await page.route('**/data/2.5/weather*', async route => {
      const mockResponse = {
        name: 'Львів',
        main: { temp: 22, humidity: 60 },
        weather: [{ description: 'Сонячно', icon: '01d' }]
      };
      await route.fulfill({ json: mockResponse });
    });

    // 2. Відкриваємо локальний сервер
    await page.goto('http://localhost:5173');


    // Бот Вводить 'Львів' у поле пошуку
    await page.fill('#city-input', 'Львів');
    
    // Натискаємо кнопку шукати
    await page.click('#search-btn');

  
    // перевірка результату
    const cityName = page.locator('#weather-info h2');
    await expect(cityName).toHaveText('Львів');

    // звірка температи з фейкового API
    const temp = page.locator('.temp');
    await expect(temp).toContainText('22°C');

    // Перевірка чи додалося місто в історію LocalStorage
    const historyItem = page.locator('#history-list li').first();
    await expect(historyItem).toHaveText('Львів');


  });

});