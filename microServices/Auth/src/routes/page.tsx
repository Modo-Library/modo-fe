import { lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Loader from '@packages/components/Loader';

export const PageRoutes = () => {
  const location = useLocation();

  return <Suspense fallback={<Loader />}></Suspense>;
};

export default PageRoutes;
