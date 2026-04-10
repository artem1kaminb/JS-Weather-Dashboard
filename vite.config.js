import { defineConfig } from 'vite';

export default defineConfig({
  test: {
    // щоб був доступ до localStorage
    environment: 'happy-dom', 
    
    include: ['tests/**/*.test.js'],
  },
});