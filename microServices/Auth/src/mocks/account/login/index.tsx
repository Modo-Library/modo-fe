import Button from '@packages/components/Button';

import LoginArea from '../../../components/LoginArea';
import '@packages/styles/global.css';

export default function LoginMock() {
  return (
    <>
      <h1>Button Mock</h1>
      <Button iconSrc={'flat-color-icons:google'} value={'구글 계정으로 로그인'} />
    </>
  );
}
