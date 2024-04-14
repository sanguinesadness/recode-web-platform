import { IIconProps } from '@src/assets/types.ts';
import { FlexCentered } from '@src/constants';
import React from 'react';
import { useTheme } from 'styled-components';

export const MediumComplexityIcon: React.FC<IIconProps> = ({
  width,
  height,
}) => {
  const { current } = useTheme();
  const barColor = current.orange.default;

  return (
    <FlexCentered>
      <svg
        width={width ?? 40}
        height={height ?? 10}
        viewBox="0 0 40 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_889_1491"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="40"
          height="10"
        >
          <rect
            x="40"
            width="10"
            height="40"
            rx="3"
            transform="rotate(90 40 0)"
            fill="#EEEEEE"
          />
        </mask>
        <g mask="url(#mask0_889_1491)">
          <rect
            x="40"
            width="10"
            height="40"
            rx="3"
            transform="rotate(90 40 0)"
            fill={barColor}
            fillOpacity="0.12"
          />
          <rect
            x="20"
            width="10"
            height="20"
            transform="rotate(90 20 0)"
            fill={barColor}
          />
        </g>
      </svg>
    </FlexCentered>
  );
};