import { Outlet, Navigate, useLocation, Route, Routes } from 'react-router-dom';

import * as router from 'host/routes';

const GetAuthentication = () => {
  const getAuth = true;

  // useEffect(() => {
  //   if (getAuth) return;
  //   // TODO : Toast Message 만들기
  //    openToastMessage('로그인을 진행해주세요', 'warn');
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [getAuth]);

  return getAuth ? <Outlet /> : <Navigate to="/account/login" />;
};

export default function AuthRoute() {
  const location = useLocation();

  return (
    <Routes location={location}>
      <Route element={<GetAuthentication />}>
        <Route element={<router.Home />} path="/" />
      </Route>
      <Route element={<router.Error />} path="*" />
    </Routes>
  );
}
