import { Routes, Route, useLocation } from 'react-router-dom';
import { Suspense } from 'react';

import * as router from 'src/utils/routes';

import Loader from 'src/components/Loader';

function App() {
  const location = useLocation();

  return (
    <Suspense fallback={<Loader />}>
      <Routes location={location}>
        <Route element={<router.Home />} path="/" />
        <Route element={<router.Error />} path="*" />
      </Routes>
    </Suspense>
  );
}

export default App;
