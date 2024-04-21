import {
  IPopoverProps,
  TPopoverPosition,
} from '@src/components/Popover/types.ts';
import { useOutsideClick } from '@src/hooks/useOutsideClick';
import { findScrollableParent } from '@src/utils/findScrollableParent.ts';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
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

  const [triggerRect, setTriggerRect] = useState<
    Pick<DOMRect, 'left' | 'top' | 'width'>
  >({
    left: 0,
    top: 0,
    width: 0,
  });
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
        // Minus 20 because of horizontal padding (10px each side)
        width: triggerRect.width - 20,
      };
    }
    return { left: 0, top: 0 };
    // eslint-disable-next-line
  }, [isOpened, offsetLeft, offsetTop, triggerRect, triggerElement]);

  useOutsideClick(
    [contentRef, triggerElement],
    () => onOutsideClick?.call(null, triggerElement),
  );

  useResizeObserver<HTMLDivElement>({
    ref: triggerElement,
    onResize: () => {
      const rect = triggerElement?.getBoundingClientRect();
      rect && setTriggerRect(rect);
    },
  });

  useEffect(() => {
    if (!triggerElement) {
      return;
    }

    const handleScroll = () => {
      const rect = triggerElement?.getBoundingClientRect();
      rect && setTriggerRect(rect);
    };

    const scrollableParent = findScrollableParent(triggerElement);
    scrollableParent?.addEventListener('scroll', handleScroll);

    return () => {
      scrollableParent?.removeEventListener('scroll', handleScroll);
    };
  }, [triggerElement]);

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
          width={position.width}
        >
          {children}
        </Styled.PopoverStyled>,
        app ?? document.body,
      )}
    </>
  );
};
