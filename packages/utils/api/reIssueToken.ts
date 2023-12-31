import axios, { AxiosResponse } from 'axios';

import getDateHour from '@packages/utils/getDateHour';

import { setCookie, removeCookie } from './cookies';

export interface IToken {
  accessToken: string;
  refreshToken: string;
  usersId: string;
}

export default async function reIssueToken(refreshToken: string) {
  await axios
    .post(`${import.meta.env.VITE_SERVER_URL}/api/v1/auth/reIssue`, null, {
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
      console.error(err);
      window.location.replace(`${import.meta.env.VITE_HOST_URL}/account/login?state=token_expired`);
    });
}
