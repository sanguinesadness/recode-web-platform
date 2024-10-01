import { IIconProps } from '@src/assets/types.ts';
import { FlexCentered } from '@src/constants/styled.ts';
import React from 'react';
import { useTheme } from 'styled-components';

export const CrossIcon: React.FC<IIconProps> = ({ width, height, color }) => {
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
        <g clipPath="url(#clip0_474_81)">
          <path
            d="M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C23.9928 5.37553 18.6245 0.00717187 12 0ZM16 14.587C16.4063 14.961 16.4326 15.5936 16.0586 16C15.6846 16.4063 15.0519 16.4326 14.6456 16.0586C14.6252 16.0399 14.6057 16.0203 14.587 16L12 13.414L9.414 16C9.01673 16.3837 8.38369 16.3726 8.00002 15.9754C7.62577 15.5879 7.62577 14.9735 8.00002 14.586L10.586 12L8.00002 9.414C7.61634 9.01673 7.62736 8.38369 8.02463 8.00002C8.41214 7.62577 9.02648 7.62577 9.414 8.00002L12 10.586L14.587 8.00002C14.961 7.59366 15.5936 7.56741 16 7.94142C16.4063 8.31544 16.4326 8.94806 16.0586 9.35442C16.0399 9.37477 16.0203 9.39427 16 9.41302L13.414 12L16 14.587Z"
            fill={color ?? current.primary.shades['20']}
          />
        </g>
        <defs>
          <clipPath id="clip0_474_81">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </FlexCentered>
  );
};
