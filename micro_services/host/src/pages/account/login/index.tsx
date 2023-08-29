import { lazy, Suspense, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { authInfoSelector } from 'auth/utils/recoil/auth';

import Loader from '@packages/components/Indicator/Loader';
import { ReactComponent as Logo } from '@packages/assets/Logo/modo-with-font.svg';

const LoginArea = lazy(() => import('auth/components/LoginArea'));

export default function LoginPage() {
  const auth = useRecoilValue(authInfoSelector);

  useEffect(() => {
    if (auth.usersId === '') {
      return;
    }

    window.location.href = '/';
  }, []);

  return (
    <main className="flex flex-col text-center w-full h-full items-center justify-around">
      <h1 className="mb-60">
        <Logo />
      </h1>
      <div className="w-full flex flex-col gap-4">
        <Suspense fallback={<Loader />}>
          <LoginArea />
        </Suspense>
      </div>
    </main>
  );
}
