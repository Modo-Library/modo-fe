import { useState, useEffect, useRef } from 'react';

import Button from '@packages/components/Button';

import openCenteredWindow from 'auth/utils/openCenterWindow';

import { REQUEST_KAKAO_LOGIN_URL } from './constant';
import kakaoIcon from './assets/kakaoIcon';

export default function KaKaoLoginButton() {
  const [loading, setLoading] = useState<boolean>(false);
  const windowRef = useRef<Window | null>(null);

  const handleKaKaoLogin = () => {
    setLoading(true);
    windowRef.current = openCenteredWindow(
      REQUEST_KAKAO_LOGIN_URL,
      'MODO : 카카오 로그인',
      500,
      600,
    );
  };

  useEffect(() => {
    setTimeout(() => {
      windowRef.current?.close();
      setLoading(false);
    }, 1000);
  });

  return (
    <Button
      onClick={handleKaKaoLogin}
      customClass="bg-[#F7E600]"
      iconCustom={kakaoIcon}
      value={'카카오 계정으로 로그인'}
      isLoading={loading}
      spinnerColor={'#212121'}
    />
  );
}
