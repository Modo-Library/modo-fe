import { Routes, Route, useLocation } from 'react-router-dom';
import { Suspense } from 'react';

import Loader from '@packages/components/Loader';

import * as router from 'host/routes';
import AuthRoute from 'host/routes/AuthRoute';

function App() {
  const location = useLocation();

  return (
    <Suspense fallback={<Loader />}>
      <Routes location={location}>
        <Route path="account">
          <Route element={<router.Login />} path="login" />
        </Route>
        <Route path="/*" element={<AuthRoute />} />
      </Routes>
    </Suspense>
  );
}

export default App;
