import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import * as Sentry from '@sentry/react';
import { BrowserRouter } from 'react-router-dom';

import '@packages/styles/_mobile.css';

import GlobalErrorBoundary from 'host/utils/error/globalBoundary';

import App from './App';

Sentry.init({
  dsn: process.env.NODE_ENV === 'production' ? process.env.VITE_SENTRY_DSN : '',
  normalizeDepth: 5,
  integrations: [new Sentry.BrowserTracing()],
  environment: process.env.NODE_ENV,
  tracesSampleRate: 0.4,
});

const container = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(container!);

root.render(
  <React.StrictMode>
    <GlobalErrorBoundary>
      <BrowserRouter>
        <RecoilRoot>
          <App />
        </RecoilRoot>
      </BrowserRouter>
    </GlobalErrorBoundary>
  </React.StrictMode>,
);
