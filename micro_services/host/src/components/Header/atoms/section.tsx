import React from 'react';

interface HeaderSectionProps {
  children: React.ReactNode;
  className?: string;
}

export function HeaderSection(props: HeaderSectionProps) {
  const { children, className } = props;

  return (
    <div className={className}>
      {React.Children.map(children, (child, index) =>
        React.isValidElement(child)
          ? React.cloneElement(child, { key: index, ...child.props })
          : child,
      )}
    </div>
  );
}
