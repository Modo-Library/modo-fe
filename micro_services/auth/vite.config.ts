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
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
    federation({
      name: 'service:auth',
      filename: 'remoteEntry.js',
      exposes: {
        './components/LoginArea': './src/components/LoginArea',
        './utils/recoil/auth': './src/utils/recoil/auth',
      },
      shared: ['react', 'react-dom', 'react-router-dom', 'recoil'],
    }),
  ],
  define: {
    'process.env': JSON.stringify(process.env),
  },
  resolve: {
    alias: {
      auth: path.resolve(__dirname, './src'),
    },
  },
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
});
