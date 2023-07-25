import { lazy } from 'react';

export const Error = lazy(() => import('host/pages/404'));

/* home */
export const Home = lazy(() => import('host/pages/home'));

/* Account */
export const Login = lazy(() => import('host/pages/account/login'));
export const Profile = lazy(() => import('host/pages/profile'));

/* Chat */
export const Chat = lazy(() => import('host/pages/chat'));
