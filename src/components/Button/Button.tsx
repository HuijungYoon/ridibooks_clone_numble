/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export type ButtonProps = {
  type: 'DogerBlue' | 'White' | 'Gray' | 'DodgerBlueOutline' | 'WhiteOutline';
  height: '50px' | '40px' | '30px' | '25px' | '21px';
  name: string;
};

export default function Button({ height, name }: ButtonProps) {
  return (
    <div css={mainStyle}>
      <button css={buttonStyle(height)}>{name}</button>
    </div>
  );
}

const mainStyle = css``;

const buttonStyle = (height: string) => css`
  height: ${height};
`;
