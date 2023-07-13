const { VITE_KAKAO_RESTAPI_KEY, VITE_REDIRECT_URL } = import.meta.env;

const REDIRECT_URL =
  process.env.NODE_ENV === 'production' ? VITE_REDIRECT_URL : 'http://localhost:5001';

export const REQUEST_KAKAO_LOGIN_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${VITE_KAKAO_RESTAPI_KEY}&redirect_uri=${REDIRECT_URL}/components/loginArea`;
