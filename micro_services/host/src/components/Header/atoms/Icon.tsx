import { Icon } from '@iconify/react';

import { HeaderButtonProps } from './button';

interface HeaderIconProps extends Omit<HeaderButtonProps, 'children'> {
  src: string;
}

export function HeaderIcon(props: HeaderIconProps) {
  const { src, color = '#333', onClick, disabled = false } = props;

  return (
    <button
      disabled={disabled}
      type="button"
      className="hover:cursor-pointer outline-none border-none disabled:opacity-50 disabled:hover:cursor-not-allowed"
      onClick={onClick}
    >
      <Icon icon={src} width="24" height="24" color={color} />
    </button>
  );
}
