import React from 'react';

import Navigation from 'host/components/Navigation';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Navigation />
    </>
  );
}
