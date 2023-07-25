import { useState } from 'react';

import Button from '@packages/components/Button';
import { setCookie } from '@packages/utils/api/cookies';

import openCenteredWindow from 'auth/utils/openCenterWindow';
import { LoadingStateType } from 'auth/utils/types';

import { REQUEST_KAKAO_LOGIN_URL } from './constant';
import kakaoIcon from './assets/kakaoIcon';

export default function KaKaoLoginButton() {
  const [loadingState, setLoadingState] = useState<LoadingStateType>('none');

  const handleKaKaoLogin = () => {
    setLoadingState('pending');
    setCookie({
      name: 'loginType',
      value: 'kakao',
      expired: 3000,
    });
    openCenteredWindow(REQUEST_KAKAO_LOGIN_URL, '_self', 500, 600);
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
