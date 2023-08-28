import React from 'react';
import { useRecoilValue } from 'recoil';
import { authSelector } from 'auth/utils/recoil/auth';

import Navigation from 'host/components/Navigation';

export default function Layout({ children }: { children: React.ReactNode }) {
  const authState = useRecoilValue(authSelector);
  const isAuth = process.env.NODE_ENV === 'production' ? authState : 'user';

  return (
    <>
      {children}
      {isAuth === 'user' && <Navigation />}
    </>
  );
}
