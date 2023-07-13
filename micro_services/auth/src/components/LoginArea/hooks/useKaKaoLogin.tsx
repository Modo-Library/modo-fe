import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import request from '@packages/utils/api/axios';
import { setCookie, removeCookie } from '@packages/utils/api/cookies';
import getDateHour from '@packages/utils/getDateHour';

interface IToken {
  accessToken: string;
  refreshToken: string;
}

export default function useKaKaoLogin() {
  const location = useLocation();
  const navigate = useNavigate();
  const code = new URLSearchParams(location.search).get('code');

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
        navigate('http://localhost:5000');
      }
    };

    getKaKaoToken();
  }, [code, navigate]);
}
