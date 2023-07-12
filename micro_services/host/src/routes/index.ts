import { lazy } from 'react';

export const Error = lazy(() => import('src/pages/404'));

/* home */
export const Home = lazy(() => import('src/pages/home'));

/* Account */
export const Login = lazy(() => import('src/pages/account/login'));
