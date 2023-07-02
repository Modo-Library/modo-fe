import React, { ButtonHTMLAttributes } from 'react';
import { Icon, IconifyIcon } from '@iconify/react';

import '@packages/styles/tailwind-LEGACY.css';

const BtnHeirarchyMap = {
  first: 'bg-brown100 text-white',
  second: 'bg-white border-2 border-brown100 shadow-none text-brown100',
  third: 'shadow-none underline underline-offset-4 text-brown100',
  fourth: 'text-black100 underline-offset-2 shadow-none',
  fifth: 'text-gray100 underline font-light text-sm shadow-none',
};

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  iconSrc?: string | IconifyIcon;
  heirarchy?: keyof typeof BtnHeirarchyMap;
  customClass?: string;
}

type ButtonType = (props: IButton) => React.ReactElement;

export const Button: ButtonType = (props) => {
  const { disabled, value, type = 'button', iconSrc, heirarchy = 'first', customClass } = props;

  const common = 'w-full font-semibold px-10 py-3 shadow-md rounded-md';
  const btnClass = `${common} ${customClass ? `${customClass}` : `${BtnHeirarchyMap[heirarchy]}`}`;

  return (
    <button className={btnClass} type={type} disabled={disabled}>
      <div className="flex items-center justify-center gap-4">
        {iconSrc && <Icon icon={iconSrc} width={24} height={24} />}
        <p>{value}</p>
      </div>
    </button>
  );
};

export default Button;
