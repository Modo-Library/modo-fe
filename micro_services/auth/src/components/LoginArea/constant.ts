const { VITE_KAKAO_RESTAPI_KEY, VITE_AUTH_URL } = import.meta.env;

const config = {
  response_type: 'code',
  client_id: VITE_KAKAO_RESTAPI_KEY,
  redirect_uri: `${VITE_AUTH_URL}/login`,
};

const queryString = Object.entries(config)
  .map(([key, value]) => `${key}=${value}`)
  .join('&');

export const REQUEST_KAKAO_LOGIN_URL = `https://kauth.kakao.com/oauth/authorize?${queryString}`;
export type LoginType = 'kakao' | 'apple' | null;
