import { create } from 'zustand';
import { CREATE_TASK_STORE_INITIAL_STATE } from './constants.ts';
import { ICreateTaskStoreValues, TCreateTaskStore } from './types.ts';

export const useCreateTaskStore = create<TCreateTaskStore>((set) => ({
  ...CREATE_TASK_STORE_INITIAL_STATE,
  setValues: (values: ICreateTaskStoreValues) => set(() => ({ ...values })),
}));
