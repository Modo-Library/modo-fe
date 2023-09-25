import { useNavigate, useLocation } from 'react-router-dom';
import { css } from '@emotion/react';
import React, { SVGProps } from 'react';

import { colors } from '@packages/styles/config';

import { ReactComponent as Chat } from '../icons/message.fill.svg';
import { ReactComponent as Profile } from '../icons/person.fill.svg';
import { ReactComponent as Home } from '../icons/home.fill.svg';

const menuColorMap = {
  selected: colors.brown30,
  nonSelected: colors.gray100,
};

const IconMap = {
  chat: <Chat />,
  home: <Home />,
  profile: <Profile />,
};

export interface MenuProps {
  iconKey: keyof typeof IconMap;
  text: string;
  src: string;
}

export default function Menu(props: MenuProps) {
  const { iconKey, text, src } = props;
  const navigate = useNavigate();
  const location = useLocation();

  const colorKey: keyof typeof menuColorMap =
    location.pathname === `/${src}` ? 'selected' : 'nonSelected';
  const color = menuColorMap[colorKey];

  const Icon = ({ fill }: { fill: string }) => {
    const SelectedIcon = IconMap[iconKey];
    const svgProps: SVGProps<SVGElement> = { ...SelectedIcon.props, fill };
    return React.cloneElement(SelectedIcon, svgProps);
  };

  return (
    <div
      className="hover:cursor-pointer flex flex-col items-center justify-center"
      onClick={() => navigate(`/${src}`)}
    >
      <Icon fill={color} />
      <p
        css={css`
          font-size: 14px;
          text-align: center;
          color: ${color};
        `}
      >
        {text}
      </p>
    </div>
  );
}
