import { lazy, Suspense, useEffect, useCallback } from 'react';
import { useRecoilValue } from 'recoil';
import { authInfoSelector } from 'auth/utils/recoil/auth';
import { useNavigate } from 'react-router-dom';

import Loader from '@packages/components/Indicator/Loader';
import { ReactComponent as Logo } from '@packages/assets/Logo/modo-with-font.svg';

const LoginArea = lazy(() => import('auth/components/LoginArea'));

export default function LoginPage() {
  const auth = useRecoilValue(authInfoSelector);
  const navigate = useNavigate();
  const isVisitor = auth.usersId === '';

  const goToMain = useCallback(() => {
    if (isVisitor) {
      return;
    }

    navigate('/');
  }, [isVisitor, navigate]);

  useEffect(() => {
    goToMain();
  }, [goToMain]);

  return (
    <main className="flex flex-col text-center w-full h-full items-center justify-around">
      {isVisitor ? (
        <>
          <h1 className="mb-60">
            <Logo />
          </h1>
          <div className="w-full flex flex-col gap-4">
            <Suspense fallback={<Loader />}>
              <LoginArea />
            </Suspense>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </main>
  );
}
