export const findScrollableParent = (
  element: HTMLDivElement,
): HTMLElement | null => {
  let parent = element.parentElement;

  while (parent) {
    if (parent.scrollHeight > parent.clientHeight) {
      return parent;
    }
    parent = parent.parentElement;
  }

  return null;
};
