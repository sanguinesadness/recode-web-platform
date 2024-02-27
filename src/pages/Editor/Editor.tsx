import { DotsIcon } from '@src/assets';
import { MainHeader } from '@src/modules/MainHeader';
import { TaskDescription } from '@src/modules/TaskDesription';
import { TaskSolution } from '@src/modules/TaskSolution';
import React, { useEffect, useState } from 'react';
import { useTheme } from 'styled-components';
import useResizeObserver from 'use-resize-observer';
import * as Styled from './styled.ts';

export const Editor: React.FC = () => {
  const { current } = useTheme();
  const { ref, width } = useResizeObserver();

  const [descriptionWidth, setDescriptionWidth] = useState<number>(0);
  const [solutionWidth, setSolutionWidth] = useState<number>(0);
  const [mouseCaptured, setMouseCaptured] = useState<boolean>(false);

  const onMouseCaptureLost = () => setMouseCaptured(false);
  const onMouseCaptureGet = () => setMouseCaptured(true);

  useEffect(() => {
    if (!width) return;
    setDescriptionWidth(width * (2 / 5));
    setSolutionWidth(width * (3 / 5));
  }, [width]);

  const onBodyMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (mouseCaptured) {
      setDescriptionWidth((prev) => prev + e.movementX);
      setSolutionWidth((prev) => prev - e.movementX);
    }
  };

  return (
    <Styled.EditorPageWrapper
      ref={ref}
      onMouseUp={onMouseCaptureLost}
      onMouseLeave={onMouseCaptureLost}
      onMouseMove={onBodyMouseMove}
    >
      <MainHeader />
      <Styled.EditPageBody>
        <TaskDescription width={descriptionWidth} />
        <Styled.ResizeButton onMouseDown={onMouseCaptureGet}>
          <DotsIcon width={10} color={current.white.shades['90']} />
        </Styled.ResizeButton>
        <TaskSolution width={solutionWidth} />
      </Styled.EditPageBody>
    </Styled.EditorPageWrapper>
  );
};
