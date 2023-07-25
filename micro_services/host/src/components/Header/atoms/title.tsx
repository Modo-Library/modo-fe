import React from 'react';

interface HeaderTitleProps {
  children: string;
}

export function HeaderTitle(props: HeaderTitleProps) {
  const { children } = props;

  return <h1 className="text-sm absolute-center">{children}</h1>;
}
