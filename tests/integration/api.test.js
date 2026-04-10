import { expect, test, describe, beforeEach, vi } from 'vitest';
import { fetchWeather } from '../../js/api.js'; 

// Перехоплюємо fetch
global.fetch = vi.fn();

describe('API Integration Tests', () => {
  beforeEach(() => {
    // Очищаємо історію викликів перед кожним тестом
    vi.resetAllMocks();
  });

  test('має успішно отримувати дані погоди (HTTP 200)', async () => {
    // Mock
    const mockResponse = {
      name: 'Львів',
      main: { temp: 22 },
      weather: [{ description: 'Clear' }]
    };

    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse
    });

    //  Виклик функції з api.js
    const data = await fetchWeather('Львів');

    // перевірка правильної обробки відповідді
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(data.name).toBe('Львів'); 
  });

  test('має викидати помилку, якщо місто не знайдено (HTTP 404)', async () => {
    //  імітування помилки від сервера
    fetch.mockResolvedValueOnce({
      ok: false,
      status: 404
    });

    // 2. Перевіряємо, чи функція кидає exception
    await expect(fetchWeather('ХибнеМісто')).rejects.toThrow();
  });
});