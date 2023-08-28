import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';

import '@packages/styles/_mobile.css';

import GlobalErrorBoundary from 'host/utils/error/globalBoundary';

import App from './App';

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
