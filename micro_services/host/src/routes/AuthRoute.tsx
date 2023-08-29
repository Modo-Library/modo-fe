import { Outlet, Navigate, useLocation, Route, Routes } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { authInfoSelector } from 'auth/utils/recoil/auth';
import { useEffect } from 'react';

import * as router from 'host/routes';

const GetAuthentication = () => {
  const [auth, setAuth] = useRecoilState(authInfoSelector);

  useEffect(() => {
    setAuth(auth);
  }, []);

  if (process.env.NODE_ENV !== 'production') {
    return <Outlet />;
  }

  const isUser = auth.usersId !== '';

  // useEffect(() => {
  //   if (getAuth) return;
  //   // TODO : Toast Message 만들기
  //    openToastMessage('로그인을 진행해주세요', 'warn');
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [getAuth]);

  return isUser ? <Outlet /> : <Navigate to="/account/login" />;
};

export default function AuthRoute() {
  const location = useLocation();

  return (
    <Routes location={location}>
      <Route element={<GetAuthentication />}>
        <Route element={<router.Home />} path="/" />
        <Route element={<router.Profile />} path="/profile" />
        <Route element={<router.Chat />} path="/chat" />
      </Route>
      <Route element={<router.Error />} path="*" />
    </Routes>
  );
}
