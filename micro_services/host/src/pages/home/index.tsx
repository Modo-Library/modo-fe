import { lazy } from 'react';

import Header from 'host/components/Header';

const BookPage = lazy(() => import('books/pages/book'));

export default function HomePage() {
  return (
    <>
      <Header>
        <Header.Title>MODO</Header.Title>
        <Header.Menu />
      </Header>
      <BookPage />
    </>
  );
}
