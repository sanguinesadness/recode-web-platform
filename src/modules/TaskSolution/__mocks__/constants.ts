export const mockCodeAreaValue = `import {
  IPopoverProps,
  TPopoverPosition,
} from '@src/components/Popover/types.ts';
import { useOutsideClick } from '@src/hooks/useOutsideClick';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import useResizeObserver from 'use-resize-observer';
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
  const contentRef = useRef<HTMLDivElement>(null);

  const [triggerRect, setTriggerRect] = useState<Pick<DOMRect, 'left' | 'top'>>(
    {
      left: 0,
      top: 0,
    },
  );
  const [triggerElement, setTriggerElement] = useState<HTMLDivElement | null>(
    null,
  );

  const handleTriggerRefChange = useCallback((node: HTMLDivElement) => {
    setTriggerElement(node);
  }, []);

  const position: TPopoverPosition = useMemo(() => {
    if (triggerElement) {
      return {
        top:
          triggerRect.top +
          window.scrollX +
          triggerElement.clientHeight +
          5 +
          (offsetTop ?? 0),
        left: triggerRect.left + window.scrollY + (offsetLeft ?? 0),
      };
    }
    return { left: 0, top: 0 };
    // eslint-disable-next-line
  }, [isOpened, offsetLeft, offsetTop, triggerRect, triggerElement]);

  useOutsideClick(
    [contentRef, triggerElement],
    () => onOutsideClick?.call(null),
  );

  useResizeObserver<HTMLElement>({
    ref: app,
    onResize: () => {
      const rect = triggerElement?.getBoundingClientRect();
      if (rect) setTriggerRect(rect);
    },
  });

  return (
    <>
      <Styled.TriggerWrapper ref={handleTriggerRefChange}>
        {trigger}
      </Styled.TriggerWrapper>
      {createPortal(
        <Styled.PopoverStyled
          ref={contentRef}
          $isOpened={isOpened}
          top={position.top}
          left={position.left}
        >
          {children}
        </Styled.PopoverStyled>,
        app ?? document.body,
      )}
    </>
  );
};`;
