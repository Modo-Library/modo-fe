import { render } from '@testing-library/react';

import Button, { IButton } from '.';

const defaultProps: IButton = {
  value: '버튼',
  type: 'button',
  heirarchy: 'first',
  onClick: () => {},
};

describe('버튼 기능 테스트', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('Disabled가 상태일 때 기능이 멈춘다', () => {
    const defineProps = {
      ...defaultProps,
      disabled: false,
    };

    render(<Button {...defineProps} />);
  });
});
