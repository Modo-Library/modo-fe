import React from 'react';

export interface HeaderButtonProps {
  color?: string;
  onClick?: () => void;
  disabled?: boolean;
  children: string | React.ReactElement;
}

export function HeaderButton(props: HeaderButtonProps) {
  const { children, onClick, disabled = false } = props;

  return (
    <button
      disabled={disabled}
      type="button"
      className="font-bold hover:cursor-pointer outline-none border-none disabled:opacity-50 disabled:hover:cursor-not-allowed"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
