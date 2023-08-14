import { useState } from 'react';

import Button from '@packages/components/Button';

import { LoadingStateType } from 'auth/utils/types';

import { REQUEST_APPLE_LOGIN_URL } from './constant';

export default function AppleLoginButton() {
  const [loadingState, setLoadingState] = useState<LoadingStateType>('none');

  const handleAppleLogin = () => {
    setLoadingState('pending');
    window.location.href = REQUEST_APPLE_LOGIN_URL;
  };

  return (
    <Button
      onClick={handleAppleLogin}
      customClass={'bg-black100 text-white'}
      iconSrc={'mdi:apple'}
      iconColor={'#fefefe'}
      isLoading={loadingState === 'pending'}
      value={'애플 계정으로 로그인'}
    />
  );
}
