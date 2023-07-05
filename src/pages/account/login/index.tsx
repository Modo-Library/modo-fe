import { lazy, Suspense } from 'react';

import Loader from '@packages/components/Loader';
import { ReactComponent as Logo } from '@packages/assets/Logo/modo-with-font.svg';

const LoginArea = lazy(() => import('auth/components/LoginArea'));

export default function LoginPage() {
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
