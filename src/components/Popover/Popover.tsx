import {
  IPopoverProps,
  TPopoverPosition,
} from '@src/components/Popover/types.ts';
import { useOutsideClick } from '@src/hooks/useOutsideClick';
import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import * as Styled from './styled.ts';

export const Popover: React.FC<IPopoverProps> = ({
  children,
  trigger,
  onOutsideClick,
  isOpened,
}) => {
  const app = document.getElementById('app');
  const triggerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const [position, setPosition] = useState<TPopoverPosition>({
    top: 0,
    left: 0,
  });

  useEffect(() => {
    const element = triggerRef.current;
    if (element) {
      const rect = element.getBoundingClientRect();
      setPosition({
        top: rect.top + window.scrollY + element.clientHeight,
        left: rect.left + window.scrollX,
      });
    }
  }, [isOpened]);

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
