import axios from 'axios';

import getDateHour from '@packages/utils/getDateHour';

import { setCookie, removeCookie } from './cookies';

export interface IToken {
  accessToken: string;
  refreshToken: string;
  usersId: string;
}

export default async function reIssueToken(refreshToken: string) {
  const result: IToken = await axios.post(
    'v1/auth/reIssue',
    {},
    { headers: { Token: `Bearer ${refreshToken}` } },
  );

  removeCookie('accessToken');
  removeCookie('refreshToken');
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
}
