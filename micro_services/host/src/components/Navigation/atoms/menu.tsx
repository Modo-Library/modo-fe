import { Icon } from '@iconify/react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

export interface MenuProps {
  icon: string;
  text: string;
  src: string;
}

type DisabledColorType = '#333' | '#c8c8c8';

export default function Menu(props: MenuProps) {
  const { icon, text, src } = props;
  const navigate = useNavigate();
  const location = useLocation();
  const [colorClass, setColorClass] = useState<DisabledColorType>('#333');

  useEffect(() => {
    setColorClass(location.pathname === `/${src}` ? '#333' : '#c8c8c8');
  }, [navigate]);

  return (
    <div
      className="hover:cursor-pointer flex flex-col items-center justify-center"
      onClick={() => navigate(`/${src}`)}
    >
      <Icon icon={icon} width="24" height="24" color={colorClass} />
      <p className={`text-xs text-center text-[${colorClass}]`}>{text}</p>
    </div>
  );
}
