import { Routes, Route, useLocation } from 'react-router-dom';
import { Suspense } from 'react';

import Loader from '@packages/components/Loader';

import * as router from 'src/routes';

function App() {
  const location = useLocation();

  return (
    <Suspense fallback={<Loader />}>
      <Routes location={location}>
        <Route path="account">
          <Route element={<router.Login />} path="login" />
        </Route>
        <Route element={<router.Home />} path="/" />
        <Route element={<router.Error />} path="*" />
      </Routes>
    </Suspense>
  );
}

export default App;
