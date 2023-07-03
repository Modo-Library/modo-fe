import { Routes, Route, useLocation } from 'react-router-dom';

import LoginArea from './components/LoginArea';

function App() {
  const location = useLocation();

  return (
    <Routes location={location}>
      <Route element={<LoginArea />} path="loginarea" />
      <Route element={<>페이지를 찾을 수 없습니다.</>} path="*" />
    </Routes>
  );
}

export default App;
