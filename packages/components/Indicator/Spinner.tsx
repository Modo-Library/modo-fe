/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

interface ButtonSpinnerProps {
  color?: string;
  width?: number;
  height?: number;
}

export default function ButtonSpinner(props: ButtonSpinnerProps) {
  const { color, width, height } = props;

  const isColor = color || '#eeeeee';

  const spinner = css`
    width: ${width ?? 24}px;
    height: ${height ?? 24}px;
    border-radius: 50%;
    background: radial-gradient(farthest-side, ${isColor} 94%, #0000) top/5px 5px no-repeat,
      conic-gradient(#0000 30%, ${isColor});
    -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 5px), #000 0);
    animation: spinner-c7wet2 1s infinite linear;

    @keyframes spinner-c7wet2 {
      100% {
        transform: rotate(1turn);
      }
    }
  `;
  // eslint-disable-next-line react/no-unknown-property
  return <div data-testid="button-spinner" css={spinner} />;
}
