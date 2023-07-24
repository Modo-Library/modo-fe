import { useSetRecoilState } from 'recoil';

import request from '@packages/utils/api/axios';
import { getCookie, setCookie, removeCookie } from '@packages/utils/api/cookies';
import getDateHour from '@packages/utils/getDateHour';

import { LoginType } from 'auth/components/LoginArea/constant';

import { LoadingStateType } from 'auth/utils/types';
import { authSelector } from 'auth/utils/recoil/auth';

interface IToken {
  accessToken: string;
  refreshToken: string;
  usersId: string;
}

export default function useLogin(
  code: string | null,
  type: LoginType,
  handleState: (props: LoadingStateType) => void,
) {
  const setAuthState = useSetRecoilState(authSelector);

  const getKaKaoLogin = async () => {
    // FIXME : !getCookie('accessToken')
    if (code === null || getCookie('accessToken')) return;
    if (type !== 'kakao') return;

    try {
      const result: IToken = await request.get(`oauth/kakao?code=${code}`);

      setAuthState('user');
      handleState('success');
      removeCookie('accessToken');
      removeCookie('refreshToken');
      localStorage.removeItem('usersId');

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
      localStorage.setItem('usersId', result.usersId);
    } catch (err) {
      handleState('error');
    }
  };

  return { getKaKaoLogin };
}