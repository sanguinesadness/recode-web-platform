import { IGetTaskResponse } from '@src/models';
import { api } from '../api.ts';

export const getTaskMock = async (): Promise<IGetTaskResponse> => {
  return await api.get('task/mock').json();
};
