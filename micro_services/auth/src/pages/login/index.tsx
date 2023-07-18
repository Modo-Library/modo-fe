import { useLocation } from 'react-router-dom';

import Button from '@packages/components/Button';
import { ReactComponent as Logo } from '@packages/assets/Logo/modo-with-font.svg';

import KaKaoLoginButton from './KaKaoLoginButton';
import useKaKaoLogin from './hooks/useKaKaoLogin';

export default function LoginPage() {
  const location = useLocation();
  const code = new URLSearchParams(location.search).get('code');

  // -------------------------
  useKaKaoLogin(code);
  // -------------------------

  return (
    <section className="flex flex-col text-center w-full h-full items-center justify-around">
      <h1 className="mb-60">
        <Logo />
      </h1>
      <div className="w-full flex flex-col gap-4">
        <KaKaoLoginButton />
        <Button
          onClick={() => {}}
          disabled={true}
          customClass={'bg-black100 text-white'}
          iconSrc={'mdi:apple'}
          iconColor={'#fefefe'}
          value={'애플 계정으로 로그인'}
        />
      </div>
    </section>
  );
}
