import { IColor } from '@src/types';
import { useMemo } from 'react';
import { useTheme } from 'styled-components';
import { TButtonType } from '../types.ts';

export const useButtonColor = (type: TButtonType): IColor => {
  const { current } = useTheme();

  const mapper = useMemo(
    (): Record<TButtonType, IColor> => ({
      success: current.success,
      secondary: current.secondary,
      alert: current.red,
      primary: current.primary,
      brand: current.brand,
      warning: current.orange,
    }),
    [current],
  );

  return mapper[type];
};
