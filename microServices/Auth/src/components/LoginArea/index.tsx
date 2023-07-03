import Button from '@packages/components/Button';

import KaKaoLoginButton from './KaKaoLoginButton';

export default function LoginArea() {
  return (
    <section className="flex flex-col w-full gap-4">
      <Button
        onClick={() => {}}
        disabled={true}
        customClass={'bg-white border-2 border-gray100'}
        iconSrc={'flat-color-icons:google'}
        value={'구글 계정으로 로그인'}
      />
      <KaKaoLoginButton />
      <Button
        onClick={() => {}}
        disabled={true}
        customClass={'bg-black100 text-white'}
        iconSrc={'mdi:apple'}
        iconColor={'#fefefe'}
        value={'애플 계정으로 로그인'}
      />
    </section>
  );
}
