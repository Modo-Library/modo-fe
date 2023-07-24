import path from 'path';

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';
import svgr from 'vite-plugin-svgr';

// const PREFIX_ENVIRONMENT_URL =
//   process.env.NODE_ENV === 'production' ? `host.docker.internal` : 'localhost';
// https://vitejs.dev/config/
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
        './pages/login': './src/pages/login',
        './utils/recoil/auth': './src/utils/recoil/auth',
      },
      shared: ['react', 'react-dom', 'react-router-dom', 'recoil'],
    }),
  ],
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
