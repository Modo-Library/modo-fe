import path from 'path';

import { defineConfig } from 'vite';
import federation from '@originjs/vite-plugin-federation';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// const PREFIX_ENVIRONMENT_URL =
//   process.env.NODE_ENV === 'production' ? `${process.env.CLIENT_IP}` : 'localhost';

export default defineConfig({
  plugins: [
    svgr(),
    react(),
    federation({
      name: 'host',
      filename: 'remoteEntry.js',
      remotes: {
        auth: `http://localhost:5001/assets/remoteEntry.js`,
        books: `http://localhost:5002/assets/remoteEntry.js`,
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
