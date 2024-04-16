import { Button } from '@src/components/Button';
import { ReactElement } from 'react';

export interface IFormButtonsProps {
  primaryButton?: ReactElement<typeof Button>;
  secondaryButton?: ReactElement<typeof Button>;
  cancelButton?: ReactElement<typeof Button>;
}
