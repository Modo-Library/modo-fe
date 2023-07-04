import Button from '@packages/components/Button';

export default function KaKaoLoginButton() {
  const { VITE_KAKAO_RESTAPI_KEY, VITE_KAKAO_REDIRECT_URL } = import.meta.env;
  const requestKakaoLoginURL = `https://kauth.kakao.com/oauth/authorize?client_id=${VITE_KAKAO_RESTAPI_KEY}&redirect_uri=${VITE_KAKAO_REDIRECT_URL}&response_type=code`;

  const handleKaKaoLogin = () => {
    window.location.href = requestKakaoLoginURL;
  };

  const kakaoIcon = (
    <svg width="24" height="24" viewBox="0 0 31 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13.4975 0C6.04333 0 0 4.78144 0 10.6793C0.101304 12.6319 0.748439 14.5164 1.86734 16.1172C2.98624 17.7179 4.53169 18.9703 6.32682 19.7308C6.11871 20.4461 4.99788 24.3347 4.95363 24.6389C4.95363 24.6389 4.92578 24.8674 5.07325 24.9546C5.12348 24.9806 5.17859 24.9959 5.23504 24.9993C5.29148 25.0027 5.34801 24.9942 5.40098 24.9743C5.82703 24.9151 10.3251 21.7434 11.1051 21.1926C11.8994 21.3038 12.7005 21.3587 13.5025 21.357C20.9567 21.357 27 16.5755 27 10.6777C27 4.77979 20.9518 0 13.4975 0Z"
        fill="black"
      />
    </svg>
  );

  return (
    <Button
      onClick={handleKaKaoLogin}
      customClass="bg-[#F7E600]"
      iconCustom={kakaoIcon}
      value={'카카오 계정으로 로그인'}
    />
  );
}
