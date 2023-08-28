import KaKaoLoginButton from './KaKaoLoginButton';
import AppleLoginButton from './AppleLoginButton';

export default function LoginArea() {
  return (
    <section className="flex flex-col text-center w-full h-full items-center justify-around">
      <div className="w-full flex flex-col gap-4">
        <KaKaoLoginButton />
        <AppleLoginButton />
      </div>
    </section>
  );
}
