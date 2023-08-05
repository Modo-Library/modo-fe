import React from 'react';

import Button from '@packages/components/Button';

import errorLog from './constant';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export default class GlobalErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    // Error Catch
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError && this.state.error) {
      // Error Fallback UI
      const errorInfo = this.state.error.toString();
      const errorMessage =
        Object.entries(errorLog).find(([key]) => errorInfo.includes(key))?.[1] || 'Unknown Error';

      const onClickRefresh = () => {
        window.location.reload();
      };

      return (
        <div className="flex items-center justify-center w-full flex-col gap-2 text-center">
          <h1 className="font-normal text-[2.25rem] text-center tracking-normal">
            오류가 발생했어요
          </h1>
          <p className="w-full text-red-700 rounded-xl">{errorMessage}</p>
          <div className="fixed space-y-3 bottom-6 w-full max-w-layout px-4">
            <p className="text-gray100">
              궁금하시다면{' '}
              <a
                href="mailto:realmodolib@gmail.com"
                className="underline hover:cursor-pointer"
                target="_blank"
                rel="noreferrer"
              >
                고객센터
              </a>
              에 물어보세요!
            </p>
            <Button value={'다시 시도'} onClick={onClickRefresh} />
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
