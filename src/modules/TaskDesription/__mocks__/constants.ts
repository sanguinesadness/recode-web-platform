import { ITaskTextProps } from '@src/modules/TaskDesription/components/TaskText/types.ts';
import { ITaskTag } from '../components/TaskTags/types.ts';

export const mockTaskTags: ITaskTag[] = [
  {
    id: 'tag-1',
    text: 'easy',
    color: 'success',
  },
  {
    id: 'tag-2',
    text: 'medium',
    color: 'orange',
  },
  {
    id: 'tag-3',
    text: 'hard',
    color: 'red',
  },
];

export const mockAuthorName = 'x8diar';

export const mockTaskText: ITaskTextProps = {
  main: {
    md: [
      {
        md:
          'Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they' +
          ' add up to `target`.',
      },
      {
        md:
          'You may assume that each input would have **exactly one solution**, and you may not use the same' +
          ' element twice.',
      },
      {
        md: 'You can return the answer in any order.',
      },
    ],
  },
  notes: {
    md: [
      {
        md: [
          { md: '**Input**: nums = [2,7,11,15], target = 9.' },
          { md: '**Output**: [0,1].' },
          {
            md: '**Explanation**: Because nums[0] + nums[1] == 9, we return [0, 1].',
          },
        ],
        isBlockquote: true,
      },
      {
        md: [
          {
            md: 'Another **very important** information about the task.',
          },
        ],
        isBlockquote: true,
      },
      {
        md: [
          { md: 'And a piece of code:' },
          {
            md: '\tif (nums[i] + nums[j] === target) {\n\t    return [i, j];\n\t}',
            isCode: true,
          },
        ],
        isBlockquote: true,
      },
    ],
  },
};
