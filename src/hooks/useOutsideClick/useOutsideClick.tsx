import { RefObject, useEffect } from 'react';

export function useOutsideClick(
  refs: Array<RefObject<HTMLElement>>,
  callback: () => void,
) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        refs.every((ref) => !!ref) &&
        (event.target as Node) &&
        !refs.some((ref) => ref.current?.contains(event.target as Node))
      ) {
        callback();
      }
    }

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [refs]);
}
