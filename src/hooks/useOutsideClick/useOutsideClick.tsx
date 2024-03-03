import { RefObject, useEffect } from 'react';

export function useOutsideClick(
  refs: Array<RefObject<HTMLElement> | HTMLElement | null>,
  callback: () => void,
) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        refs.every((ref) => !!ref) &&
        (event.target as Node) &&
        !refs.some((ref) => {
          if (!ref) return false;
          const target = event.target as Node;
          if ('current' in ref) {
            return ref.current?.contains(target);
          }
          return ref.contains(target);
        })
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
