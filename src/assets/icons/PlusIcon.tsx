import { IIconProps } from '@src/assets/types.ts';
import { FlexCentered } from '@src/constants';
import React from 'react';
import { useTheme } from 'styled-components';

export const PlusIcon: React.FC<IIconProps> = ({ color, width, height }) => {
  const { current } = useTheme();

  return (
    <FlexCentered>
      <svg
        width={width ?? 24}
        height={height ?? 24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_406_2185)">
          <path
            d="M23 11H13V0.999984C13 0.447703 12.5523 0 12 0C11.4477 0 11 0.447703 11 0.999984V11H0.999984C0.447703 11 0 11.4477 0 12C0 12.5523 0.447703 13 0.999984 13H11V23C11 23.5522 11.4477 24 12 24C12.5522 24 12.9999 23.5522 12.9999 23V13H22.9999C23.5522 13 23.9999 12.5523 23.9999 12C24 11.4477 23.5523 11 23 11Z"
            fill={color ?? current.secondary.shades['90']}
          />
        </g>
        <defs>
          <clipPath id="clip0_406_2185">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </FlexCentered>
  );
};
