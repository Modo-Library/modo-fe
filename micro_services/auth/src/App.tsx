import { Routes, Route, useLocation } from 'react-router-dom';

import LoginPage from 'auth/pages/login';

function App() {
  const location = useLocation();

  return (
    <Routes location={location}>
      <Route element={<LoginPage />} path="/login" />
      <Route element={<>존재하지 않는 페이지 입니다</>} path="*" />
    </Routes>
  );
}

export default App;
