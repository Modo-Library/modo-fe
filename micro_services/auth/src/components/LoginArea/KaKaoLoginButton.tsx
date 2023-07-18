import Button from '@packages/components/Button';

import { REQUEST_KAKAO_LOGIN_URL } from './constant';
import kakaoIcon from './assets/kakaoIcon';

export default function KaKaoLoginButton() {
  const handleKaKaoLogin = () => {
    window.open(REQUEST_KAKAO_LOGIN_URL, '_self', 'width=500,height=600');
  };

  return (
    <Button
      onClick={handleKaKaoLogin}
      customClass="bg-[#F7E600]"
      iconCustom={kakaoIcon}
      value={'카카오 계정으로 로그인'}
      spinnerColor={'#212121'}
    />
  );
}
