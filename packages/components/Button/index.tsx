import React, { ButtonHTMLAttributes } from 'react';
import { Icon, IconifyIcon } from '@iconify/react';

import '@packages/styles/tailwind-LEGACY.css';

import ButtonSpinner from '@packages/components/Indicator/Spinner';

const BtnHeirarchyMap = {
  first: 'bg-brown100 text-white',
  second: 'bg-white border-2 border-brown100 shadow-none text-brown100',
  third: 'shadow-none underline underline-offset-4 text-brown100',
  fourth: 'text-black100 underline-offset-2 shadow-none',
  fifth: 'text-gray100 underline font-light text-sm shadow-none',
  disabled: 'active:animate-none text-gray100 bg-gray100 opacity-25 border-2',
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  iconCustom?: React.ReactElement;
  iconSrc?: string | IconifyIcon;
  iconColor?: string;
  heirarchy?: keyof typeof BtnHeirarchyMap;
  customClass?: string;
  isLoading?: boolean;
  spinnerColor?: string;
}

export const Button = (props: ButtonProps): React.ReactElement => {
  const {
    onClick,
    disabled,
    value,
    type = 'button',
    iconCustom,
    iconSrc,
    iconColor,
    isLoading = false,
    spinnerColor,
    heirarchy = 'first',
    customClass,
  } = props;

  if (iconCustom && iconSrc) {
    console.error('아이콘이 중복 사용되었습니다');
    return <></>;
  }

  const loadingClass = isLoading ? 'opacity-50' : '';
  const disabledClass = `${
    disabled ? `${BtnHeirarchyMap.disabled}` : 'cursor:pointer active:animate-push'
  }`;
  const common = `w-full font-semibold px-10 py-3 shadow-md rounded-md ${disabledClass}`;
  const btnClass = `${common} ${customClass ? `${customClass}` : `${BtnHeirarchyMap[heirarchy]}`}`;

  return (
    <button onClick={onClick} className={btnClass} type={type} disabled={disabled}>
      <div className={`flex items-center justify-center gap-4 ${loadingClass}`}>
        {iconCustom && iconCustom}
        {iconSrc && <Icon icon={iconSrc} color={iconColor} width={24} height={24} />}
        <p>{value}</p>
        {isLoading && <ButtonSpinner color={spinnerColor} />}
      </div>
    </button>
  );
};

export default Button;
