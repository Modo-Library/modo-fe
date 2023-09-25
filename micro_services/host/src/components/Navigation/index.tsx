import { useRecoilValue } from 'recoil';

import { visibleNavigation } from 'host/utils/recoil/navigation';

import Menu from './atoms/menu';
import { 메뉴정보 } from './constant';

export default function Navigation() {
  const isShow = useRecoilValue(visibleNavigation);

  return (
    <>
      {isShow && (
        <section className="absolute z-[1000] max-w-layout bg-white flex justify-around items-center bottom-0 border-t-2 border-gray50 w-full full:w-[25rem]">
          {메뉴정보.map((item, idx) => (
            <Menu key={idx} {...item} />
          ))}
        </section>
      )}
    </>
  );
}
