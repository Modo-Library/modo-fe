import { useSetRecoilState } from 'recoil';
import axios, { AxiosResponse, AxiosError } from 'axios';
import * as Sentry from '@sentry/react';

import { setCookie, removeCookie } from '@packages/utils/api/cookies';
import getDateHour from '@packages/utils/getDateHour';
import { IToken } from '@packages/utils/api/reIssueToken';
import NetworkError from '@packages/utils/error/NetworkError';
import getErrorMessage from '@packages/utils/getErrorMessage';

import { LoginType } from 'auth/components/LoginArea/constant';

import { authSelector } from 'auth/utils/recoil/auth';
import AuthError from 'auth/utils/error/AuthError';

export default function useLogin() {
  const setAuthState = useSetRecoilState(authSelector);

  const getLogin = async (code: string | null, type: LoginType) => {
    try {
      if (code === null) {
        window.location.replace(`${process.env.VITE_HOST_URL}/?state=login_error`);
        throw new AuthError('code가 존재하지 않습니다');
      }

      await axios
        .post(`https://www.modolib.site/request/oauth/${type}?code=${code}`)
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
          setCookie({
            name: 'usersId',
            value: decodeURIComponent(res.data.usersId),
            expired: getDateHour(0.5),
          });
          window.location.replace(`${process.env.VITE_HOST_URL}/`);
        });
    } catch (err) {
      if (err instanceof AxiosError) {
        const { method, url, params, headers } = err.config!;
        const { data, status } = err.response!;

        Sentry.setContext('API Request Detail', {
          method,
          url,
          params,
          data,
          headers,
        });

        Sentry.setContext('API Response Detail', {
          status,
          data,
        });
      }

      Sentry.withScope((scope) => {
        scope.setTag('type', 'login');
        scope.setLevel('debug');

        Sentry.captureException(new NetworkError(getErrorMessage(err)));
      });
      window.location.replace(`${process.env.VITE_HOST_URL}/?state=login_error`);
    }
  };

  return { getLogin };
}
