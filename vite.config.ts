import path from 'path';

import { defineConfig } from 'vite';
import federation from '@originjs/vite-plugin-federation';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

dotenv.config();

const PREFIX_ENVIRONMENT_URL =
  process.env.NODE_ENV === 'production' ? `${process.env.SERVER_IP}` : 'localhost';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'app',
      remotes: {
        Auth: `http://${PREFIX_ENVIRONMENT_URL}:5001/assets/remoteEntry.js`,
        Books: `http://${PREFIX_ENVIRONMENT_URL}:5002/assets/remoteEntry.js`,
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  resolve: {
    alias: {
      src: path.resolve(__dirname, './src'),
    },
  },
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
});
