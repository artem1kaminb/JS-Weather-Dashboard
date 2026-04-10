import { expect, test, describe, beforeEach, vi } from 'vitest';
import { saveToHistory, getHistory } from '../../js/storage.js';

//  Створення фейкового localStorage 
let mockStore = {};
const localStorageMock = {
  getItem(key) { return mockStore[key] || null; },
  setItem(key, value) { mockStore[key] = value.toString(); },
  clear() { mockStore = {}; } 
};

vi.stubGlobal('localStorage', localStorageMock);

describe('Storage Unit Tests', () => {
  
  beforeEach(() => {
    localStorage.clear(); 
  });

  test('Перевірка збереження міста в історію', () => {
    saveToHistory('Львів');
    const history = getHistory();
    
    expect(history.length).toBe(1);
    expect(history[0]).toBe('Львів');
  });

  test('Перевірка на додавання дублікатів', () => {
    saveToHistory('Київ');
    saveToHistory('Київ'); // Пробуємо додати вдруге
    
    const history = getHistory();
    expect(history.length).toBe(1); // Довжина має залишитись 1
  });
});