import { Routes, Route, useLocation } from 'react-router-dom';

import ComponentRoutes from './routes/component';
import PageRoutes from './routes/page';

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
