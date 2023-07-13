import path from 'path';

import { defineConfig } from 'vite';
import federation from '@originjs/vite-plugin-federation';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

const PREFIX_ENVIRONMENT_URL = (prefix: string, port: number) =>
  process.env.NODE_ENV === 'production' ? `${prefix}.modolib.site` : `localhost:${port}`;

export default defineConfig({
  plugins: [
    svgr(),
    react(),
    federation({
      name: 'host',
      filename: 'remoteEntry.js',
      remotes: {
        auth: `http://${PREFIX_ENVIRONMENT_URL('auth', 5001)}/assets/remoteEntry.js`,
        books: `http://${PREFIX_ENVIRONMENT_URL('books', 5002)}/assets/remoteEntry.js`,
      },
      shared: ['react', 'react-dom', 'react-router-dom'],
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
