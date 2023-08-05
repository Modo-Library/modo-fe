import { useContext } from 'react';

import { MenuContext } from '..';

export default function useOpenMenu() {
  const context = useContext(MenuContext);

  if (context === undefined) {
    throw new Error('useOpenMenu는 Header안에서 사용해야 합니다.');
  }

  return context;
}
