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
    react(),
    federation({
      name: 'service:auth',
      filename: 'remoteEntry.js',
      exposes: {
        './components/LoginArea': './src/components/LoginArea',
      },
      shared: ['react', 'react-dom', 'react-router-dom'],
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
