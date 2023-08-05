import Menu, { MenuProps } from './atoms/menu';

const 메뉴정보: MenuProps[] = [
  { iconKey: 'chat', text: '채팅', src: 'chat' },
  { iconKey: 'home', text: '홈', src: '' },
  { iconKey: 'profile', text: '프로필', src: 'profile' },
];

export default function Navigation() {
  return (
    <section className="absolute flex justify-around items-center bottom-0 border-t-2 border-gray-100 w-full full:w-[25rem]">
      {메뉴정보.map((item, idx) => (
        <Menu key={idx} {...item} />
      ))}
    </section>
  );
}
