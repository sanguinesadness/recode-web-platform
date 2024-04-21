import { ICreateTaskStore } from '@src/stores/createTask';

export interface ICreateTaskFormProps {
  onValuesChange: (values: ICreateTaskStore) => void;
}
