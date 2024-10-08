import { IIconProps } from '@src/assets/types.ts';
import { FlexCentered } from '@src/constants';
import React from 'react';
import { useTheme } from 'styled-components';

export const HeartSolidIcon: React.FC<IIconProps> = ({
  color,
  height,
  width,
}) => {
  const { current } = useTheme();

  return (
    <FlexCentered>
      <svg
        width={width ?? 24}
        height={height ?? 23}
        viewBox="0 0 24 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.5 0.916504C16.3739 0.934019 15.2724 1.24836 14.3067 1.82778C13.341 2.40719 12.5453 3.23117 12 4.2165C11.4546 3.23117 10.6589 2.40719 9.6932 1.82778C8.7275 1.24836 7.62601 0.934019 6.49996 0.916504C4.7049 0.994495 3.01366 1.77976 1.79574 3.10074C0.577818 4.42171 -0.0677922 6.17103 -4.17093e-05 7.9665C-4.17093e-05 12.5135 4.78596 17.4795 8.79996 20.8465C9.69618 21.5996 10.8293 22.0125 12 22.0125C13.1706 22.0125 14.3037 21.5996 15.2 20.8465C19.214 17.4795 24 12.5135 24 7.9665C24.0677 6.17103 23.4221 4.42171 22.2042 3.10074C20.9863 1.77976 19.295 0.994495 17.5 0.916504Z"
          fill={color ?? current.secondary.shades['90']}
        />
      </svg>
    </FlexCentered>
  );
};
