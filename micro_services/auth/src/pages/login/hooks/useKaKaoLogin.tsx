import request from '@packages/utils/api/axios';
import { getCookie, setCookie, removeCookie } from '@packages/utils/api/cookies';
import getDateHour from '@packages/utils/getDateHour';

import { LoginType } from 'auth/components/LoginArea/constant';

import { LoginStateType } from '..';

interface IToken {
  accessToken: string;
  refreshToken: string;
}

export default async function useKaKaoLogin(
  code: string | null,
  type: LoginType,
  handleState: (props: LoginStateType) => void,
) {
  if (!code || getCookie('accessToken')) return;
  if (type !== 'kakao') return;

  const result: IToken = await request.get(`oauth/kakao?code=${code}`);

  if (!result) {
    handleState('error');
    return;
  }

  handleState('success');
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
}
