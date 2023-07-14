import { Routes, Route, useLocation } from 'react-router-dom';

import PageRoutes from 'auth/routes/page';
import ComponentRoutes from 'auth/routes/component';

function App() {
  const location = useLocation();

  return (
    <Routes location={location}>
      <Route element={<ComponentRoutes />} path="/components/*" />
      <Route element={<PageRoutes />} path="/pages/*" />
    </Routes>
  );
}

export default App;
