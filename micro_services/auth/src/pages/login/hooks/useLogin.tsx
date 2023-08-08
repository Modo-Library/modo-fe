import { useSetRecoilState } from 'recoil';
import axios, { AxiosResponse } from 'axios';

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

      await axios
        .get(`https://www.modolib.site/request/oauth/kakao?code=${code}`)
        .then((res: AxiosResponse<IToken>) => {
          setAuthState('user');
          removeCookie('accessToken');
          removeCookie('refreshToken');
          localStorage.removeItem('usersId');

          setCookie({
            name: 'accessToken',
            value: res.data.accessToken,
            expired: getDateHour(0.5),
          });
          setCookie({
            name: 'refreshToken',
            value: res.data.refreshToken,
            expired: getDateHour(6),
          });
          localStorage.setItem('usersId', res.data.usersId);
          window.location.replace(`${process.env.VITE_HOST_URL}/`);
        })
        .catch((err) => {
          throw new Error(err);
        });
    } catch (err) {
      window.location.replace(`${process.env.VITE_HOST_URL}/?state=login_error`);
    }
  };

  return { getKaKaoLogin };
}
