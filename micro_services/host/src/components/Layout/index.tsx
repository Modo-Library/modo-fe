import React from 'react';
import { useRecoilValue } from 'recoil';
import { authInfoSelector } from 'auth/utils/recoil/auth';

import Navigation from 'host/components/Navigation';

export default function Layout({ children }: { children: React.ReactNode }) {
  const authState = useRecoilValue(authInfoSelector).usersId !== '';
  const isAuth = process.env.NODE_ENV === 'production' ? authState : true;

  return (
    <>
      {children}
      {isAuth && <Navigation />}
    </>
  );
}
