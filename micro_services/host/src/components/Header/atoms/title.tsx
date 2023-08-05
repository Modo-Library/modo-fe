import React from 'react';

interface HeaderTitleProps {
  children: string;
}

export function HeaderTitle(props: HeaderTitleProps) {
  const { children } = props;

  return (
    <h1 className="text-[15px] text-black100 absolute-center font-bold tracking-tight">
      {children}
    </h1>
  );
}
