import path from 'path';

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svgr(),
    react(),
    federation({
      name: 'service:books',
      filename: 'remoteEntry.js',
      exposes: {
        './components/BookListRow': './src/components/BookListRow',
      },
      shared: ['react', 'react-dom', 'react-router-dom', 'recoil'],
    }),
  ],
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
