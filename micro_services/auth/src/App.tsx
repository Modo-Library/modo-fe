import { Routes, Route, useLocation } from 'react-router-dom';
import { Suspense } from 'react';

import Loader from '@packages/components/Indicator/Loader';

import { LoginPage } from 'auth/routes';
import ComponentRoutes from 'auth/routes/Component';

function App() {
  const location = useLocation();

  return (
    <Suspense fallback={<Loader />}>
      <Routes location={location}>
        {process.env.NODE_ENV !== 'production' && (
          <>
            {/* Components */}
            <Route element={<ComponentRoutes />} path="/components/*" />
          </>
        )}
        {/* Pages */}
        <Route element={<LoginPage />} path="/login" />
        {/* Etc */}
        <Route element={<>존재하지 않는 페이지 입니다</>} path="*" />
      </Routes>
    </Suspense>
  );
}

export default App;
