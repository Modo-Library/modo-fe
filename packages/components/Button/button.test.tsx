import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import Button, { ButtonProps } from '.';

describe('버튼 기능 테스트', () => {
  let defaultProps: ButtonProps;

  beforeEach(() => {
    defaultProps = {
      value: '버튼',
      disabled: false,
      isLoading: false,
      heirarchy: 'first',
      onClick: jest.fn(),
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('Disabled: false일 때, 기능 작동이 된다', async () => {
    const defineProps = {
      ...defaultProps,
      disabled: false,
    };

    render(<Button {...defineProps} />);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(button).toBeEnabled();
    expect(button).toHaveProperty('disabled', false);
    expect(defineProps.onClick).toHaveBeenCalled();
  });

  test('Disabled: true일 때, 기능 작동이 멈춘다', async () => {
    const defineProps = {
      ...defaultProps,
      disabled: true,
    };

    render(<Button {...defineProps} />);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(button).toBeDisabled();
    expect(button).toHaveProperty('disabled', true);
    expect(button).toHaveClass('opacity-25');
    expect(defineProps.onClick).not.toHaveBeenCalled();
  });

  test('isLoading이 true일 때, Loading State를 표시한다', async () => {
    const defineProps = {
      ...defaultProps,
      isLoading: true,
    };

    render(<Button {...defineProps} />);

    const button = screen.getByRole('button');
    expect(button.firstChild).toHaveClass('opacity-50');

    const spinner = screen.getByTestId('button-spinner');
    expect(spinner).toBeInTheDocument();
  });
});
