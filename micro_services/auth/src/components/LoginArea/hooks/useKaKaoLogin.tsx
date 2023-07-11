import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import qs from 'qs';

import request from '@packages/utils/axios';
import { setCookie, removeCookie } from '@packages/utils/cookies';
import getDateHour from '@packages/utils/getDateHour';

interface IToken {
  accessToken: string;
  refreshToken: string;
}

export default function useKaKaoLogin() {
  const location = useLocation();
  const navigate = useNavigate();
  const { code } = qs.parse(location.search.split('?')[1]);

  useEffect(() => {
    if (!code) return;

    const getKaKaoToken = async () => {
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
        navigate('/');
      }
    };

    getKaKaoToken();
  }, [code, navigate]);
}
