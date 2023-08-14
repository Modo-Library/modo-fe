import { useState } from 'react';

import Button from '@packages/components/Button';

import { LoadingStateType } from 'auth/utils/types';

import { REQUEST_KAKAO_LOGIN_URL } from './constant';
import kakaoIcon from './assets/kakaoIcon';

export default function KaKaoLoginButton() {
  const [loadingState, setLoadingState] = useState<LoadingStateType>('none');

  const handleKaKaoLogin = () => {
    setLoadingState('pending');
    window.location.href = REQUEST_KAKAO_LOGIN_URL;
  };

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
