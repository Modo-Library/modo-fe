import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { authInfoSelector } from 'auth/utils/recoil/auth';

const canShowNavigation = ['chat', 'profile'];

export default function useShowNavigation() {
  const location = useLocation();
  const [showNavigation, setShowNavigation] = useState(false);
  const auth = useRecoilValue(authInfoSelector);
  const isUser = auth.usersId !== '' || process.env.NODE_ENV === 'development';

  useEffect(() => {
    const { pathname } = location;
    const startsWithValidPath = canShowNavigation.some((item) => pathname.startsWith(`/${item}`));
    if (startsWithValidPath && isUser) {
      setShowNavigation(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return showNavigation;
}
