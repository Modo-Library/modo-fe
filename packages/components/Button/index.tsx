import React, { ButtonHTMLAttributes } from 'react';
import { Icon, IconifyIcon } from '@iconify/react';

import '@packages/styles/tailwind-LEGACY.css';

const BtnHeirarchyMap = {
  first: 'bg-brown100 text-white',
  second: 'bg-white border-2 border-brown100 shadow-none text-brown100',
  third: 'shadow-none underline underline-offset-4 text-brown100',
  fourth: 'text-black100 underline-offset-2 shadow-none',
  fifth: 'text-gray100 underline font-light text-sm shadow-none',
  disabled: 'text-gray100 bg-gray100 opacity-25 border-2',
};

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  iconCustom?: React.ReactElement;
  iconSrc?: string | IconifyIcon;
  iconColor?: string;
  heirarchy?: keyof typeof BtnHeirarchyMap;
  customClass?: string;
  onClick: () => void;
}

type ButtonType = (props: IButton) => React.ReactElement;

export const Button: ButtonType = (props) => {
  const {
    onClick,
    disabled,
    value,
    type = 'button',
    iconCustom,
    iconSrc,
    iconColor,
    heirarchy = 'first',
    customClass,
  } = props;

  const disabledClass = `${disabled ? `${BtnHeirarchyMap.disabled}` : ''}`;
  const common = `w-full font-semibold px-10 py-3 shadow-md rounded-md cursor:pointer ${disabledClass}`;
  const btnClass = `${common} ${customClass ? `${customClass}` : `${BtnHeirarchyMap[heirarchy]}`}`;

  return (
    <button onClick={onClick} className={btnClass} type={type} disabled={disabled}>
      <div className="flex items-center justify-center gap-4">
        {iconCustom && iconCustom}
        {iconSrc && <Icon icon={iconSrc} color={iconColor} width={24} height={24} />}
        <p>{value}</p>
      </div>
    </button>
  );
};

export default Button;
