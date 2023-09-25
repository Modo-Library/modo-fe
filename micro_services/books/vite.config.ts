import path from 'path';

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';
import svgr from 'vite-plugin-svgr';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  plugins: [
    svgr(),
    react(),
    federation({
      name: 'service:books',
      filename: 'remoteEntry.js',
      exposes: {
        './pages/book': './src/pages/book',
      },
      shared: ['react', 'react-dom', 'react-router-dom', 'recoil'],
    }),
  ],
  define: {
    'process.env': JSON.stringify(process.env),
  },
  resolve: {
    alias: {
      books: path.resolve(__dirname, './src'),
    },
  },
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
});
