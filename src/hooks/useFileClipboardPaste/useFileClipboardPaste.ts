import { useCallback, useLayoutEffect } from 'react';

export const useFileClipboardPaste = (
  onFileUrl: (value: string) => void,
): void => {
  const handleClipboardPaste = useCallback(
    (event: ClipboardEvent) => {
      const clipboardData = event.clipboardData;
      if (
        clipboardData &&
        clipboardData.files &&
        clipboardData.files.length > 0
      ) {
        const file = clipboardData.files[0];
        const fileUrl = URL.createObjectURL(file);
        onFileUrl(fileUrl);
      }
    },
    [onFileUrl],
  );

  useLayoutEffect(() => {
    document.addEventListener('paste', handleClipboardPaste);
    return () => {
      document.removeEventListener('paste', handleClipboardPaste);
    };
  }, []);
};
