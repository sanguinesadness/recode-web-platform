import { useEffect, useRef, useState } from 'react';

export const CheckBoundaryComponent = () => {
  const blockRef = useRef<HTMLDivElement>(null);
  const [isTouchingBoundary, setIsTouchingBoundary] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (!blockRef.current) return;
      const blockRect = blockRef.current.getBoundingClientRect();
      const { innerWidth, innerHeight } = window;

      const isTouching =
        blockRect.top <= 0 ||
        blockRect.bottom >= innerHeight ||
        blockRect.left <= 0 ||
        blockRect.right >= innerWidth;

      setIsTouchingBoundary(isTouching);
    };

    // Подписка на событие resize
    window.addEventListener('resize', handleResize);

    // Проверка при монтировании компонента
    handleResize();

    // Отписка от события при размонтировании компонента
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      ref={blockRef}
      style={{
        width: '100px',
        height: '100px',
        backgroundColor: isTouchingBoundary ? 'red' : 'green',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      {isTouchingBoundary ? 'Задевает границу' : 'Не задевает границу'}
    </div>
  );
};
