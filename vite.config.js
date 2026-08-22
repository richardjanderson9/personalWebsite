/*
  Path: vite.config.js
  Description: Vite configuration file for a React application.
  Author: Richard Anderson.
  Last Updated: 28-March-2026.
  Version: 1.1.
  Note: Streamlined for simplicity.
*/
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  publicDir: 'public',
  server: {
    port: 3000,
    host: '0.0.0.0',
    open: true
  },
  build: {
    target: 'esnext',
    outDir: 'build'
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  }
});