import { lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Loader from '@packages/components/Loader';

const LoginArea = lazy(() => import('src/components/LoginArea'));

export const ComponentRoutes = () => {
  const location = useLocation();

  return (
    <Suspense fallback={<Loader />}>
      <Routes key={location.pathname} location={location}>
        <Route element={<LoginArea />} path="loginarea" />
      </Routes>
    </Suspense>
  );
};

export default ComponentRoutes;
