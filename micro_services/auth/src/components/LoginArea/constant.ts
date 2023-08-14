const { VITE_KAKAO_RESTAPI_KEY, VITE_AUTH_URL } = process.env;

const SOCIAL_CONFIG = {
  kakao: {
    response_type: 'code',
    client_id: VITE_KAKAO_RESTAPI_KEY,
    redirect_uri: `${VITE_AUTH_URL}/login`,
  },
  apple: {
    client_id: 'com.heodoo.NewModo2',
    redirect_uri: `https://auth.modolib.site/login`,
    response_type: 'code',
    response_mode: 'fragment',
  },
};

const queryStringKakao = Object.entries(SOCIAL_CONFIG.kakao)
  .map(([key, value]) => `${key}=${value}`)
  .join('&');

const queryStringApple = Object.entries(SOCIAL_CONFIG.apple)
  .map(([key, value]) => `${key}=${value}`)
  .join('&');

export const REQUEST_KAKAO_LOGIN_URL = `https://kauth.kakao.com/oauth/authorize?${queryStringKakao}`;
export const REQUEST_APPLE_LOGIN_URL = `https://appleid.apple.com/auth/authorize?${queryStringApple}`;
export type LoginType = keyof typeof SOCIAL_CONFIG;
