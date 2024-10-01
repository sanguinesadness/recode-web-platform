import { ITag } from '@src/models/tags';

export const mockTaskTags: ITag[] = [
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

export const mockTaskText = `
  Given an array of integers \`nums\` and an integer \`target\`, return indices of the two numbers such that they add up to \`target\`.
  \nYou may assume that each input would have **exactly one solution**, and you may not use the same element twice.
  \nYou can return the answer in any order.
  \\
  \\
  **Notes**:
  \n>**Input**: nums = [2,7,11,15], target = 9.  
  **Output**: [0,1].  
  **Explanation**: Because nums[0] + nums[1] == 9, we return [0, 1].
  \n>Another **very important** information about the task.\n
  \\
  And a piece of code:
  \`\`\`
  if (nums[i] + nums[j] === target) {
      return [i, j];
  }
  \`\`\`
`;
