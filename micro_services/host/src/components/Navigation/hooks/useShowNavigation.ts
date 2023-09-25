import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const canShowNavigation = ['chat', 'profile', 'home'];

export default function useShowNavigation() {
  const location = useLocation();
  const [showNavigation, setShowNavigation] = useState(false);

  useEffect(() => {
    const { pathname } = location;
    const startsWithValidPath = canShowNavigation.some((item) => pathname.startsWith(`/${item}`));
    if (startsWithValidPath) {
      setShowNavigation(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return showNavigation;
}
