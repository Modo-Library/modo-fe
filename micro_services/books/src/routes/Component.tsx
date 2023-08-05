import { Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Loader from '@packages/components/Indicator/Loader';

import BookListRow from 'books/components/BookListRow';

export const ComponentRoutes = () => {
  const location = useLocation();

  return (
    <Suspense fallback={<Loader />}>
      <Routes key={location.pathname} location={location}>
        {/* 컴포넌트 라우팅 장소 */}
        <Route element={<BookListRow />} path="BookListRow" />
        <Route element={<>존재하지 않는 컴포넌트 입니다</>} path="*" />
      </Routes>
    </Suspense>
  );
};

export default ComponentRoutes;
