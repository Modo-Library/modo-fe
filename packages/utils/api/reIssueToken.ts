import axios, { AxiosResponse } from 'axios';

import getDateHour from '@packages/utils/getDateHour';
import APIErrorCapture from '@packages/utils/error/APIErrorCapture';

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
      setCookie({
        name: 'usersId',
        value: res.data.usersId,
        expired: getDateHour(0.5),
      });
    })
    .catch((err) => {
      APIErrorCapture(err, 'reIssue Token', 'debug');
    })
    .finally(() => {
      removeCookie('usersId');
      removeCookie('accessToken');
      removeCookie('refreshToken');
    });
}

// 2000 : ExpiredJwtException
// 2001 : ReIssueBeforeAccessTokenExpiredException
// 2002 : TokenIsNullException
// 2003 : SignatureException
