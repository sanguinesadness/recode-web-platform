import { IIconProps } from '@src/assets/types.ts';
import { FlexCentered } from '@src/constants';
import React from 'react';
import { useTheme } from 'styled-components';

export const CommentCheckIcon: React.FC<IIconProps> = ({
  color,
  width,
  height,
}) => {
  const { current } = useTheme();

  return (
    <FlexCentered>
      <svg
        width={width ?? 20}
        height={height ?? 20}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_52_366)">
          <path
            d="M10.6967 0.0231696C9.26795 -0.0767962 7.83444 0.131291 6.49313 0.633351C5.15182 1.13541 3.934 1.91973 2.92208 2.93323C1.91015 3.94674 1.12774 5.16578 0.62777 6.50787C0.127804 7.84996 -0.0780462 9.28379 0.0241489 10.7123C0.391649 16.0065 5.06832 19.9998 10.9025 19.9998H15.8333C16.938 19.9985 17.997 19.5591 18.7781 18.778C19.5593 17.9969 19.9987 16.9378 20 15.8332V10.2832C20.0311 7.71438 19.0892 5.22891 17.3636 3.32581C15.6379 1.42271 13.2562 0.242867 10.6967 0.0231696V0.0231696ZM15.5833 8.09317L9.92248 13.6823C9.61011 13.9935 9.18715 14.1682 8.74623 14.1682C8.30531 14.1682 7.88236 13.9935 7.56998 13.6823L4.41665 10.5957C4.25862 10.441 4.16853 10.2298 4.16619 10.0087C4.16384 9.78754 4.24944 9.57453 4.40415 9.4165C4.55886 9.25848 4.77001 9.16838 4.99114 9.16604C5.21228 9.1637 5.42529 9.24929 5.58332 9.404L8.74415 12.4932L14.4158 6.90984C14.5758 6.76911 14.7835 6.69498 14.9964 6.70268C15.2093 6.71038 15.4112 6.79932 15.5605 6.95124C15.7099 7.10316 15.7954 7.3065 15.7995 7.5195C15.8036 7.7325 15.7259 7.93898 15.5825 8.0965L15.5833 8.09317Z"
            fill={color ?? current.success.default}
          />
        </g>
        <defs>
          <clipPath id="clip0_52_366">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </FlexCentered>
  );
};
