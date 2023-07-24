import { useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import LoginArea from 'auth/components/LoginArea';

import { LoadingStateType } from 'auth/utils/types';

import useLogin from './hooks/useLogin';

export default function LoginPage() {
  const location = useLocation();
  const [loginState, setLoginState] = useState<LoadingStateType>('none');
  const code = new URLSearchParams(location.search).get('code');

  const handleLoginState = (state: LoadingStateType) => {
    setLoginState(state);
  };

  const setLoading = () => {
    setLoginState('pending');
  };

  // -------------------------
  const { getKaKaoLogin } = useLogin(code, handleLoginState);
  // -------------------------

  useEffect(() => {
    if (code === null) return;
    getKaKaoLogin();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <LoginArea loadingState={loginState} setLoading={setLoading} />;
}
