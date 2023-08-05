import React, { SVGProps } from 'react';

import { colors } from '@packages/styles/config';

import { HeaderButtonProps } from './button';
import { ReactComponent as Menu } from '../icons/menu.fill.svg';
import { ReactComponent as Plus } from '../icons/plus.fill.svg';
import { ReactComponent as Back } from '../icons/chevron.backward.svg';

const HeaderIconMap = {
  menu: <Menu />,
  plus: <Plus />,
  back: <Back />,
};

interface HeaderIconProps extends Omit<HeaderButtonProps, 'children'> {
  src: keyof typeof HeaderIconMap;
}

export function HeaderIcon(props: HeaderIconProps) {
  const { src, color = colors.black100, onClick, disabled = false } = props;

  const Icon = ({ fill }: { fill: string }) => {
    const SelectedIcon = HeaderIconMap[src];
    const svgProps: SVGProps<SVGElement> = { ...SelectedIcon.props, fill };
    return React.cloneElement(SelectedIcon, svgProps);
  };

  return (
    <button
      disabled={disabled}
      type="button"
      className="hover:cursor-pointer outline-none border-none disabled:opacity-50 disabled:hover:cursor-not-allowed"
      onClick={onClick}
    >
      <Icon key={src} fill={color} />
    </button>
  );
}
