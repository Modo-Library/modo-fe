import Button from '@packages/components/Button';

import { LoadingStateType } from 'auth/utils/types';

import KaKaoLoginButton from './KaKaoLoginButton';

interface LoginAreaProps {
  loadingState: LoadingStateType;
  setLoading: () => void;
}

export default function LoginArea(props: LoginAreaProps) {
  const { loadingState, setLoading } = props;
  return (
    <section className="flex flex-col text-center w-full h-full items-center justify-around">
      <div className="w-full flex flex-col gap-4">
        <KaKaoLoginButton loadingState={loadingState} setLoading={setLoading} />
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
