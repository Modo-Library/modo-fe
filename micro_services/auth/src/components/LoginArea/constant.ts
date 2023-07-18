const { VITE_KAKAO_RESTAPI_KEY, VITE_REDIRECT_URL } = import.meta.env;

export const REQUEST_KAKAO_LOGIN_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${VITE_KAKAO_RESTAPI_KEY}&redirect_uri=${VITE_REDIRECT_URL}/components/loginArea`;
