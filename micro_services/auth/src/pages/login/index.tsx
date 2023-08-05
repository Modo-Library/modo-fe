import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import useLogin from './hooks/useLogin';

export default function LoginPage() {
  const location = useLocation();
  const code = new URLSearchParams(location.search).get('code');

  // -------------------------
  const { getKaKaoLogin } = useLogin(code);
  // -------------------------

  useEffect(() => {
    if (code === null) return;
    getKaKaoLogin();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <></>;
}
