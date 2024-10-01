import React from 'react';
import * as Styled from './styled.ts';
import { ILinkProps } from './types.ts';

export const Link: React.FC<ILinkProps> = ({ className, children }) => {
  return <Styled.Animation className={className}>{children}</Styled.Animation>;
};
