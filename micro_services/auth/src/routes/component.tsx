import { Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Loader from '@packages/components/Indicator/Loader';

import LoginArea from 'auth/components/LoginArea';

export const ComponentRoutes = () => {
  const location = useLocation();

  return (
    <Suspense fallback={<Loader />}>
      <Routes key={location.pathname} location={location}>
        <Route element={<LoginArea />} path="loginarea" />
        <Route element={<>존재하지 않는 컴포넌트 입니다</>} path="*" />
      </Routes>
    </Suspense>
  );
};

export default ComponentRoutes;
