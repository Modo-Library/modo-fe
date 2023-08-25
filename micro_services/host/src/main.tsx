import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import * as Sentry from '@sentry/react';
import { BrowserRouter } from 'react-router-dom';

import '@packages/styles/_mobile.css';

import GlobalErrorBoundary from 'host/utils/error/globalBoundary';

import App from './App';

Sentry.init({
  dsn:
    process.env.NODE_ENV === 'production'
      ? 'https://bfd353336ec70a62a21f48c2c146e1f1@o4505763747921920.ingest.sentry.io/4505763752181760'
      : '',
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
