import axios, { AxiosResponse, AxiosError } from 'axios';
import * as Sentry from '@sentry/react';

import getErrorMessage from '@packages/utils/getErrorMessage';
import getDateHour from '@packages/utils/getDateHour';

import { setCookie, removeCookie } from './cookies';

export interface IToken {
  accessToken: string;
  refreshToken: string;
  usersId: string;
}

export default async function reIssueToken(refreshToken: string) {
  await axios
    .post(`${process.env.VITE_SERVER_URL}/api/v1/auth/reIssue`, null, {
      headers: { Token: refreshToken, 'Content-Type': 'application/json' },
    })
    .then((res: AxiosResponse<IToken>) => {
      removeCookie('accessToken');
      removeCookie('refreshToken');
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
    })
    .catch((err) => {
      Sentry.withScope((scope) => {
        scope.setTag('type', 'api');
        scope.setTag('api', 'reIssue Token');
        scope.setLevel('fatal');

        Sentry.captureException(new AxiosError(getErrorMessage(err)));
      });
      window.location.replace(`${process.env.VITE_HOST_URL}/account/login?state=token_expired`);
    });
}
