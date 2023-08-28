import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import AppleLoginButton from 'auth/components/LoginArea/AppleLoginButton';

describe('애플 버튼 기능 테스트', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('애플 로그인 버튼을 눌렀을 때, 새 window 창을 연다', async () => {
    render(<AppleLoginButton />);

    expect(screen.queryByTestId('button-spinner')).not.toBeInTheDocument();

    const mockWindowOpen = jest.spyOn(window, 'location', 'get');

    const button = screen.getByRole('button', { name: '애플 계정으로 로그인' });

    userEvent.click(button);

    await waitFor(() => {
      expect(mockWindowOpen).toHaveBeenCalled();
      expect(screen.getByTestId('button-spinner')).toBeInTheDocument();
    });
  });
});
