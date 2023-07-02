import { Routes, Route, useLocation } from 'react-router-dom';

import LoginMock from './mocks/account/login';

function App() {
  const location = useLocation();

  return (
    <Routes location={location}>
      <Route path="account">
        <Route element={<LoginMock />} path="login" />
      </Route>
      <Route element={<>페이지를 찾을 수 없습니다.</>} path="*" />
    </Routes>
  );
}

export default App;
