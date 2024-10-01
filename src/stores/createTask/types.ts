export interface ICreateTaskStoreValues {
  title: string;
  description: string;
  complexityId: string;
  languageId: string;
  tagsIds: string[];
  code?: string;
}

export interface ICreateTaskStoreActions {
  setValues: (values: ICreateTaskStoreValues) => void;
}

export type TCreateTaskStore = ICreateTaskStoreValues & ICreateTaskStoreActions;
