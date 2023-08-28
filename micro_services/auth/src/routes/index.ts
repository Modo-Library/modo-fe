import { lazy } from 'react';

// Components
export const LoginArea = lazy(() => import('auth/components/LoginArea'));

// Pages
export const LoginPage = lazy(() => import('auth/pages/login'));
