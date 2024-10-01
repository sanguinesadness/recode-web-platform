import { ITag } from '@src/models/tags';
import { useMemo } from 'react';

export const useTagsSelector = (tags: ITag[], tagsIds: string[]) => {
  return useMemo(() => {
    const result: ITag[] = [];
    tagsIds.forEach((tagId) => {
      const foundTag = tags.find((tag) => tag.id === tagId);
      if (foundTag) {
        result.push(foundTag);
      }
    });
    return result;
  }, [tagsIds]);
};
