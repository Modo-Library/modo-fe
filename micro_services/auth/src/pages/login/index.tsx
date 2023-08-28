import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import useLogin from './hooks/useLogin';

export default function LoginPage() {
  const location = useLocation();
  const codeKakao = new URLSearchParams(location.search).get('code');
  const codeApple = window.location.hash.split('#code=')[1];

  // -------------------------
  const { getLogin } = useLogin();
  // -------------------------

  useEffect(() => {
    if (codeKakao) {
      getLogin(codeKakao, 'kakao');
    } else if (codeApple) {
      getLogin(codeApple, 'apple');
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <></>;
}
