import { useLocation } from 'react-router-dom';
import React, { useState, useRef, useEffect } from 'react';

import { LoginType } from 'auth/components/LoginArea/constant';
import LoginArea from 'auth/components/LoginArea';

import { LoadingStateType } from 'auth/utils/types';

import useLogin from './hooks/useLogin';

export default function LoginPage() {
  const location = useLocation();
  const [loginState, setLoginState] = useState<LoadingStateType>('none');
  const code = new URLSearchParams(location.search).get('code');
  const type: LoginType = new URLSearchParams(location.search).get('type') as LoginType;

  const handleLoginState = (state: LoadingStateType) => {
    setLoginState(state);
  };

  const setLoading = () => {
    setLoginState('pending');
  };

  // -------------------------
  const { getKaKaoLogin } = useLogin(code, type, handleLoginState);
  const loginRef = useRef<ReturnType<typeof getKaKaoLogin> | null>(null);
  // -------------------------

  useEffect(() => {
    if (code === null) return;
    loginRef.current = getKaKaoLogin();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <LoginArea loadingState={loginState} setLoading={setLoading} />;
}
