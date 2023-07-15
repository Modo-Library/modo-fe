import { render } from '@testing-library/react';

import Button, { IButton } from '.';

describe('버튼 기능 테스트', () => {
  let defaultProps: IButton;

  beforeEach(() => {
    defaultProps = {
      value: '버튼',
      type: 'button',
      heirarchy: 'first',
      onClick: () => {},
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('Disabled : false일 때, 기능 작동을 멈춘다', () => {
    const defineProps = {
      ...defaultProps,
      disabled: false,
    };

    render(<Button {...defineProps} />);
  });
});
