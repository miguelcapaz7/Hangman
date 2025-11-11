import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default ({ mode }) => {
  return defineConfig({
    plugins: [react()],
    base: mode === 'production' ? '/Hangman/' : '/',
  });
};
