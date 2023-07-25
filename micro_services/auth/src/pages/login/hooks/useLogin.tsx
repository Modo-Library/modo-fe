import { useSetRecoilState } from 'recoil';
import axios from 'axios';

import { setCookie, removeCookie, getCookie } from '@packages/utils/api/cookies';
import getDateHour from '@packages/utils/getDateHour';
import { IToken } from '@packages/utils/api/reIssueToken';

import { LoginType } from 'auth/components/LoginArea/constant';

import { authSelector } from 'auth/utils/recoil/auth';

export default function useLogin(code: string | null) {
  const setAuthState = useSetRecoilState(authSelector);

  const getKaKaoLogin = async () => {
    try {
      const type = getCookie('loginType') as LoginType;
      if (code === null || type !== 'kakao') {
        throw new Error();
      }

      const result: IToken = await axios.get(`oauth/kakao?code=${code}`);

      setAuthState('user');
      removeCookie('accessToken');
      removeCookie('refreshToken');
      localStorage.removeItem('usersId');

      setCookie({
        name: 'accessToken',
        value: result.accessToken,
        expired: getDateHour(0.5),
      });
      setCookie({
        name: 'refreshToken',
        value: result.refreshToken,
        expired: getDateHour(6),
      });
      localStorage.setItem('usersId', result.usersId);
      window.location.replace(`${import.meta.env.VITE_HOST_URL}/`);
    } catch (err) {
      window.location.replace(`${import.meta.env.VITE_HOST_URL}/?state=login_error`);
    }
  };

  return { getKaKaoLogin };
}
