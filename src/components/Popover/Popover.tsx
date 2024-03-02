import {
  IPopoverProps,
  TPopoverPosition,
} from '@src/components/Popover/types.ts';
import { useOutsideClick } from '@src/hooks/useOutsideClick';
import React, { useMemo, useRef } from 'react';
import { createPortal } from 'react-dom';
import * as Styled from './styled.ts';

export const Popover: React.FC<IPopoverProps> = ({
  children,
  trigger,
  onOutsideClick,
  isOpened,
  offsetLeft,
  offsetTop,
}) => {
  const app = document.getElementById('app');
  const triggerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const position: TPopoverPosition = useMemo(() => {
    const element = triggerRef.current;
    if (element) {
      const rect = element.getBoundingClientRect();
      return {
        top:
          rect.top +
          window.scrollY +
          element.clientHeight +
          5 +
          (offsetTop ?? 0),
        left: rect.left + window.scrollX + (offsetLeft ?? 0),
      };
    }
    return { left: 0, top: 0 };
    // eslint-disable-next-line
  }, [isOpened, offsetLeft, offsetTop]);

  useOutsideClick([contentRef, triggerRef], () => onOutsideClick?.call(null));

  return (
    <>
      <Styled.TriggerWrapper ref={triggerRef}>{trigger}</Styled.TriggerWrapper>
      {isOpened &&
        createPortal(
          <Styled.PopoverStyled
            ref={contentRef}
            top={position.top}
            left={position.left}
          >
            {children}
          </Styled.PopoverStyled>,
          app ?? document.body,
        )}
    </>
  );
};
