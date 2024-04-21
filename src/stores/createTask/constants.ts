import { ICreateTaskStore } from '@src/stores/createTask/types.ts';

export const CREATE_TASK_STORE_INITIAL_STATE: ICreateTaskStore = {
  title: '',
  complexityId: '',
  languageId: '',
  description: '',
  tagsIds: [],
  code: '',
};
