import { IIconProps } from '@src/assets/types.ts';
import { FlexCentered } from '@src/constants';
import React from 'react';
import { useTheme } from 'styled-components';

export const AppsAddIcon: React.FC<IIconProps> = ({ color, width, height }) => {
  const { current } = useTheme();
  const fillColor = color ?? current.primary.default;

  return (
    <FlexCentered>
      <svg
        width={width ?? 18}
        height={height ?? 18}
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_910_1914)">
          <path
            d="M5.25 0H3C1.34315 0 0 1.34315 0 3V5.25C0 6.90685 1.34315 8.25 3 8.25H5.25C6.90685 8.25 8.25 6.90685 8.25 5.25V3C8.25 1.34315 6.90685 0 5.25 0Z"
            fill={fillColor}
          />
          <path
            d="M5.25 9.75H3C1.34315 9.75 0 11.0931 0 12.75V15C0 16.6569 1.34315 18 3 18H5.25C6.90685 18 8.25 16.6569 8.25 15V12.75C8.25 11.0931 6.90685 9.75 5.25 9.75Z"
            fill={fillColor}
          />
          <path
            d="M15 9.75H12.75C11.0931 9.75 9.75 11.0931 9.75 12.75V15C9.75 16.6569 11.0931 18 12.75 18H15C16.6568 18 18 16.6569 18 15V12.75C18 11.0931 16.6568 9.75 15 9.75Z"
            fill={fillColor}
          />
          <path
            d="M10.5 5.25H12.75V7.5C12.75 7.69891 12.829 7.88968 12.9697 8.03033C13.1103 8.17098 13.3011 8.25 13.5 8.25C13.6989 8.25 13.8897 8.17098 14.0303 8.03033C14.171 7.88968 14.25 7.69891 14.25 7.5V5.25H16.5C16.6989 5.25 16.8897 5.17098 17.0303 5.03033C17.171 4.88968 17.25 4.69891 17.25 4.5C17.25 4.30109 17.171 4.11032 17.0303 3.96967C16.8897 3.82902 16.6989 3.75 16.5 3.75H14.25V1.5C14.25 1.30109 14.171 1.11032 14.0303 0.96967C13.8897 0.829018 13.6989 0.75 13.5 0.75C13.3011 0.75 13.1103 0.829018 12.9697 0.96967C12.829 1.11032 12.75 1.30109 12.75 1.5V3.75H10.5C10.3011 3.75 10.1103 3.82902 9.96967 3.96967C9.82902 4.11032 9.75 4.30109 9.75 4.5C9.75 4.69891 9.82902 4.88968 9.96967 5.03033C10.1103 5.17098 10.3011 5.25 10.5 5.25V5.25Z"
            fill={fillColor}
          />
        </g>
        <defs>
          <clipPath id="clip0_910_1914">
            <rect width="18" height="18" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </FlexCentered>
  );
};
