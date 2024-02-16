import { FormikErrors } from 'formik';

export interface AddTaskFormValue {
  title?: string;
  info?: string;
  impotant?:boolean
}

export const initialAddTaskFormValue: AddTaskFormValue = {};

export const validateTask = (values: AddTaskFormValue) => {
  const errors: FormikErrors<AddTaskFormValue> = {};
  if (!values.title && !values.info) {
    errors.title = 'Please select value';
    errors.info = 'Please select value';
  }
  return errors;
};
