import { lazy, Suspense } from 'react';

import Loader from 'src/components/Loader';

const Button = lazy(() => import('auth/components/Button'));

export default function LoginPage() {
  return (
    <section className="flex flex-col text-center h-full items-center justify-around">
      <h1 className="font-bold mb-60">MODO</h1>
      <div className="w-full flex flex-col gap-4">
        <Suspense fallback={<Loader />}>
          <div className="flex flex-col gap-4 w-full">
            <Button />
          </div>
        </Suspense>
      </div>
    </section>
  );
}
