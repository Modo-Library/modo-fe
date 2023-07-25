import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { HeaderSection } from './atoms/section';
import { HeaderTitle } from './atoms/title';
import { HeaderIcon } from './atoms/Icon';
import useOpenMenu from './hooks/useOpenMenu';
import { HeaderButton } from './atoms/button';

export const MenuContext = createContext({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  handleMenuState: (state: boolean) => {},
});

export default function Header({ children }: { children: React.ReactNode }) {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const handleMenuState = (state: boolean) => {
    setOpenMenu(state);
  };

  return (
    <header className="flex relative w-full px-4 justify-between items-center h-[46px] max-h-[46px] border-b-2 border-gray-100">
      <MenuContext.Provider value={{ handleMenuState }}>
        {React.Children.map(children, (child, index) =>
          React.isValidElement(child)
            ? React.cloneElement(child, { key: index, ...child.props })
            : child,
        )}
        {openMenu && <>메뉴</>}
      </MenuContext.Provider>
    </header>
  );
}

Header.Title = React.memo(HeaderTitle);
Header.Icon = React.memo(HeaderIcon);
Header.Button = React.memo(HeaderButton);

Header.Left = function HeaderLeftSection({ children }: { children: React.ReactNode }) {
  return (
    <HeaderSection className="mr-auto flex justify-center items-center">{children}</HeaderSection>
  );
};
Header.Right = function HeaderRightSection({ children }: { children: React.ReactNode }) {
  return (
    <HeaderSection className="ml-auto flex justify-center items-center">{children}</HeaderSection>
  );
};

// Custom
Header.Back = function HeaderBack() {
  const navigate = useNavigate();

  return <HeaderIcon onClick={() => navigate(-1)} src="ion:chevron-back-outline" />;
};

Header.Menu = function HeaderMenu() {
  const { handleMenuState } = useOpenMenu();

  return <HeaderIcon onClick={() => handleMenuState(true)} src="ic:round-menu" />;
};
