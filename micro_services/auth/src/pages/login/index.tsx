import { useLocation } from 'react-router-dom';
import React, { useState } from 'react';

import { LoginType } from 'auth/components/LoginArea/constant';

import useKaKaoLogin from './hooks/useKaKaoLogin';

const StateComponentsMap: { [key in string]: React.ReactElement } = {
  pending: <div>로딩 중...</div>,
  error: <div>로그인 실패!</div>,
  success: <div>로그인 성공!</div>,
};

export type LoginStateType = 'pending' | 'success' | 'error';

export default function LoginPage() {
  const location = useLocation();
  const [loginState, setLoginState] = useState<LoginStateType>('pending');
  const code = new URLSearchParams(location.search).get('code');
  const type: LoginType = new URLSearchParams(location.search).get('type') as LoginType;

  const handleLoginState = (state: LoginStateType) => {
    setLoginState(state);
  };

  // -------------------------
  useKaKaoLogin(code, type, handleLoginState);
  // -------------------------

  const StateComponents = ({ state }: { state: keyof typeof StateComponentsMap }) =>
    StateComponentsMap[state];

  return (
    <div>
      <StateComponents state={loginState} />
    </div>
  );
}
