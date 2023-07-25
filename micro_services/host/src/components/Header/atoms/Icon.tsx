import { Icon } from '@iconify/react';

interface HeaderIconProps {
  src: string;
  color?: string;
  onClick?: () => void;
}

export function HeaderIcon(props: HeaderIconProps) {
  const { src, color = '#333', onClick } = props;

  return (
    <button
      type="button"
      className="hover:cursor-pointer outline-none border-none"
      onClick={onClick}
    >
      <Icon icon={src} width="24" height="24" color={color} />
    </button>
  );
}
