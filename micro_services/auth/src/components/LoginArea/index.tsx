import { useLocation } from 'react-router-dom';

import Button from '@packages/components/Button';

import KaKaoLoginButton from './KaKaoLoginButton';
import useKaKaoLogin from './hooks/useKaKaoLogin';

export default function LoginArea() {
  const location = useLocation();
  const code = new URLSearchParams(location.search).get('code');

  // ------------------------
  useKaKaoLogin(code);
  // ------------------------

  return (
    <section className="flex flex-col w-full gap-4">
      <KaKaoLoginButton />
      <Button
        onClick={() => {}}
        disabled={true}
        customClass={'bg-black100 text-white'}
        iconSrc={'mdi:apple'}
        iconColor={'#fefefe'}
        value={'애플 계정으로 로그인'}
      />
    </section>
  );
}
