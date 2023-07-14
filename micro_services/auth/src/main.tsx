import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { server } from './mock/browser';
import App from './App';

import '@packages/styles/_mobile.css';

server.start({ onUnhandledRequest: 'bypass' });

const queryClient = new QueryClient();
const container = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(container!);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
);
