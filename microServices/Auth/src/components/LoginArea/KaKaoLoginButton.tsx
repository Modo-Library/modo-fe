import Button from '@packages/components/Button';

export default function KaKaoLoginButton() {
  const { VITE_KAKAO_REST_API_KEY, VITE_KAKAO_REDIRECT_URL } = import.meta.env;
  const requestKakaoLoginURL = `https://kauth.kakao.com/oauth/authorize?client_id=${VITE_KAKAO_REST_API_KEY}&redirect_uri=${VITE_KAKAO_REDIRECT_URL}&response_type=code`;

  const handleKaKaoLogin = () => {
    window.location.href = requestKakaoLoginURL;
  };

  return (
    <Button
      onClick={handleKaKaoLogin}
      customClass={'bg-[#FAE100]'}
      iconSrc={'ri:kakao-talk-fill'}
      value={'카카오 계정으로 로그인'}
    />
  );
}
