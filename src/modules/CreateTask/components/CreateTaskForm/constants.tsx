import { Icon } from '@src/components/Icon';
import { TSelectOption } from '@src/components/Select/types.ts';
import { EIconTypes } from '@src/constants';
import * as Styled from './styled.ts';

export const complexitySelectOptions: TSelectOption[] = [
  {
    value: 'easy-complexity',
    label: (
      <Styled.ComplexitySelectOption>
        <Icon iconType={EIconTypes.EASY_COMPLEXITY} />
        <span>Easy</span>
      </Styled.ComplexitySelectOption>
    ),
  },
  {
    value: 'medium-complexity',
    label: (
      <Styled.ComplexitySelectOption>
        <Icon iconType={EIconTypes.MEDIUM_COMPLEXITY} />
        <span>Medium</span>
      </Styled.ComplexitySelectOption>
    ),
  },
  {
    value: 'hard-complexity',
    label: (
      <Styled.ComplexitySelectOption>
        <Icon iconType={EIconTypes.HARD_COMPLEXITY} />
        <span>Hard</span>
      </Styled.ComplexitySelectOption>
    ),
  },
];

export const languageSelectOptions: TSelectOption[] = [
  {
    value: 'javascript',
    label: 'Javascript',
  },
  {
    value: 'java',
    label: 'Java',
  },
  {
    value: 'csharp',
    label: 'C#',
  },
  {
    value: 'cplusplus',
    label: 'C++',
  },
  {
    value: 'python',
    label: 'Python',
  },
  {
    value: 'golang',
    label: 'Golang',
  },
];
