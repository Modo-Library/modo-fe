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
    <header className="flex z-[1000] bg-white absolute top-0 w-full px-4 justify-between items-center h-[46px] max-h-[46px] border-b-2 border-gray50">
      <MenuContext.Provider value={{ handleMenuState }}>
        {React.Children.map(children, (child, index) =>
          React.isValidElement(child)
            ? React.cloneElement(child, { key: index, ...child.props })
            : child,
        )}
        {openMenu && (
          <aside className="duration-300">
            <div className="absolute bg-white top-0 left-0 h-screen w-1/2 z-[10000] animate-showRight">
              메뉴
              <button
                className="absolute top-3 right-3 hover:cursor-pointer"
                onClick={() => handleMenuState(false)}
              >
                <HeaderIcon src="back" />
              </button>
            </div>
            <div className="absolute animate-fadeIn bg-gray-700 opacity-50 top-0 left-0 w-full h-screen z-[9999]" />
          </aside>
        )}
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

  return <HeaderIcon onClick={() => navigate(-1)} src="back" />;
};

Header.Menu = function HeaderMenu() {
  const { handleMenuState } = useOpenMenu();

  return <HeaderIcon onClick={() => handleMenuState(true)} src="menu" />;
};
