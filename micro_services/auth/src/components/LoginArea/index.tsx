import Button from '@packages/components/Button';

import KaKaoLoginButton from './KaKaoLoginButton';

export default function LoginArea() {
  return (
    <section className="flex flex-col text-center w-full h-full items-center justify-around">
      <div className="w-full flex flex-col gap-4">
        <KaKaoLoginButton />
        <Button
          onClick={() => {}}
          disabled={true}
          customClass={'bg-black100 text-white'}
          iconSrc={'mdi:apple'}
          iconColor={'#fefefe'}
          value={'애플 계정으로 로그인'}
        />
      </div>
    </section>
  );
}
