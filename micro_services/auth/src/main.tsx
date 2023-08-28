import React from 'react';
import { RecoilRoot } from 'recoil';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import * as Sentry from '@sentry/react';

import { server } from './mock/browser';
import App from './App';
import '@packages/styles/_mobile.css';

if (process.env.NODE_ENV === 'mock') {
  server.start({ onUnhandledRequest: 'bypass' });
}

Sentry.init({
  dsn: process.env.NODE_ENV === 'production' ? process.env.VITE_SENTRY_DSN : '',
  normalizeDepth: 5,
  integrations: [new Sentry.BrowserTracing()],
  environment: 'auth',
  tracesSampleRate: 0.4,
});

const queryClient = new QueryClient();
const container = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(container!);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen />
      <RecoilRoot>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </RecoilRoot>
    </QueryClientProvider>
  </React.StrictMode>,
);
