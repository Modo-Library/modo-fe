import { Inter } from 'next/font/google';
import React from 'react';

import type { Metadata } from 'next';

import '@packages/styles/global.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MODO : 모두의 도서관',
  description: '© 2023 모두의 도서관',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <meta charSet="UTF-8" />
        <link
          rel="stylesheet"
          type="text/css"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.7/dist/web/variable/pretendardvariable-dynamic-subset.css"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>MODO : 모두의 도서관</title>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
