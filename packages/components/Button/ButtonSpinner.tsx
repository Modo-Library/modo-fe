/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export default function ButtonSpinner({ color }: { color?: string }) {
  const isColor = color || '#eeeeee';

  const spinner = css`
    width: 24px;
    height: 24px;
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
  return <div css={spinner} />;
}
