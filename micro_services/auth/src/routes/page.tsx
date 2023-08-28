import { Suspense } from 'react';

import Loader from '@packages/components/Indicator/Loader';

export const PageRoutes = () => (
  // const location = useLocation();

  <Suspense fallback={<Loader />}></Suspense>
);

export default PageRoutes;
