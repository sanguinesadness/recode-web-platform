import { IIconProps } from '@src/assets/types.ts';
import React from 'react';
import { useTheme } from 'styled-components';

export const DotsIcon: React.FC<IIconProps> = ({ height, color, width }) => {
  const { current } = useTheme();

  const fillColor = color ?? current.primary.shades['20'];

  return (
    <svg
      width={width ?? 24}
      height={height ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 4.00003C13.1046 4.00003 14 3.10459 14 2.00002C14 0.895438 13.1046 0 12 0C10.8954 0 10 0.895438 10 2.00002C10 3.10459 10.8954 4.00003 12 4.00003Z"
        fill={fillColor}
      />
      <path
        d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
        fill={fillColor}
      />
      <path
        d="M12 24C13.1046 24 14 23.1046 14 22C14 20.8954 13.1046 19.9999 12 19.9999C10.8954 19.9999 10 20.8954 10 22C10 23.1046 10.8954 24 12 24Z"
        fill={fillColor}
      />
    </svg>
  );
};