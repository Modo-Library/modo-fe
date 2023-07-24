import { useEffect } from 'react';

import Button from '@packages/components/Button';

import openCenteredWindow from 'auth/utils/openCenterWindow';
import { LoadingStateType } from 'auth/utils/types';

import { REQUEST_KAKAO_LOGIN_URL } from './constant';
import kakaoIcon from './assets/kakaoIcon';

interface KaKaoLoginButtonProps {
  loadingState: LoadingStateType;
  setLoading: () => void;
}

export default function KaKaoLoginButton(props: KaKaoLoginButtonProps) {
  const { loadingState, setLoading } = props;

  const handleKaKaoLogin = () => {
    setLoading();
    openCenteredWindow(REQUEST_KAKAO_LOGIN_URL, '_self', 500, 600);
  };

  useEffect(() => {
    if (loadingState !== 'success') return;

    setTimeout(() => {
      window.location.replace('/');
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadingState]);

  return (
    <Button
      onClick={handleKaKaoLogin}
      customClass="bg-[#F7E600]"
      iconCustom={kakaoIcon}
      value={'카카오 계정으로 로그인'}
      isLoading={loadingState === 'pending'}
      spinnerColor={'#212121'}
    />
  );
}
