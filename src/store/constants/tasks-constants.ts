import { AddTaskFormValue } from "@/validations/taskValidation"

export enum TaskTypes {
  GET_TASKS_LIST = '@TaskTypes/GET_TASKS_LIST',
  SET_TASKS_LIST = '@TaskTypes/SET_TASKS_LIST',
  CHANGE_TASK = '@TaskTypes/CHANGE_TASK',
  SET_SELECTED_TASK = '@TaskTypes/SET_SELECTED_TASK',
  SET_ERROR_MESSAGE = '@TaskTypes/SET_ERROR_MESSAGE',
  DELETE_TASK_BY_ID ='@TaskTypes/DELETE_TASK_BY_ID',
  ADD_TASK ='@TaskTypes/ADD_TASK'
}
export interface IDeleteTaskByIdAction {
  payload: number,
  type: TaskTypes.DELETE_TASK_BY_ID
}
export interface IAddTaskAction {
  payload: AddTaskFormValue,
  type: TaskTypes.ADD_TASK
}
export interface IChangeTaskPayload {
  id:number,
  body:AddTaskFormValue
}
export interface IChangeTaskAction {
  payload: IChangeTaskPayload,
  type: TaskTypes.ADD_TASK
}
