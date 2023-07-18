import request from '@packages/utils/api/axios';
import { getCookie, setCookie, removeCookie } from '@packages/utils/api/cookies';
import getDateHour from '@packages/utils/getDateHour';

interface IToken {
  accessToken: string;
  refreshToken: string;
}

export default async function useKaKaoLogin(code: string | null) {
  if (!code || getCookie('accessToken')) return;

  const result: IToken = await request.get(`oauth/kakao?code=${code}`);

  if (result) {
    removeCookie('accessToken');
    removeCookie('refreshToken');
    setCookie({
      name: 'accessToken',
      value: result.accessToken,
      options: { path: '/', expires: new Date(Date.now() + getDateHour(1)) },
    });
    setCookie({
      name: 'refreshToken',
      value: result.refreshToken,
      options: { path: '/', expires: new Date(Date.now() + getDateHour(24 * 30)) },
    });
    window.location.replace(`${import.meta.env.VITE_REDIRECT_URL}/components/loginArea`);
  }
}
