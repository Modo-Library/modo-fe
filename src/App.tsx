import { Routes, Route, useLocation } from 'react-router-dom';

import HomePage from 'src/pages/home';

function App() {
  const location = useLocation();

  return (
    <>
      <Routes location={location}>
        <Route element={<HomePage />} path="/" />
        <Route element={<>페이지를 찾을 수 없습니다.</>} path="*" />
      </Routes>
    </>
  );
}

export default App;
