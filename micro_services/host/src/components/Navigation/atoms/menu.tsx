/** @jsxImportSource @emotion/react */
import { Icon } from '@iconify/react';
import { useNavigate, useLocation } from 'react-router-dom';
import { css } from '@emotion/react';

export interface MenuProps {
  icon: string;
  text: string;
  src: string;
}

const menuColorMap = {
  selected: '#333',
  nonSelected: '#c8c8c8',
};

export default function Menu(props: MenuProps) {
  const { icon, text, src } = props;
  const navigate = useNavigate();
  const location = useLocation();

  const color: keyof typeof menuColorMap =
    location.pathname === `/${src}` ? 'selected' : 'nonSelected';
  const textColor = menuColorMap[color];

  return (
    <div
      className="hover:cursor-pointer flex flex-col items-center justify-center"
      onClick={() => navigate(`/${src}`)}
    >
      <Icon icon={icon} width="24" height="24" color={textColor} />
      <p
        css={css`
          font-size: 14px;
          text-align: center;
          color: ${textColor};
        `}
      >
        {text}
      </p>
    </div>
  );
}
