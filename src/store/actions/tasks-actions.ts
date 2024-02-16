import { ITaskDTO } from "@/interfaces/interfaces";
import { TaskTypes, IChangeTaskPayload } from "../constants/tasks-constants";
import { AddTaskFormValue } from "@/validations/taskValidation";


export const getTasksListAction = () => {
  return {
    type: TaskTypes.GET_TASKS_LIST,
  };
}
export const setTasksListAction = (payload:ITaskDTO[]|unknown) => {
    return {
      type: TaskTypes.SET_TASKS_LIST,
      payload
    };
  }
  export const changeTaskAction = (payload:IChangeTaskPayload) => {
    return {
      type: TaskTypes.CHANGE_TASK,
      payload
    };
  }
  export const setSelectedTaskAction = (payload:ITaskDTO) => {
    return {
      type: TaskTypes.SET_SELECTED_TASK,
      payload
    };
  }
  export const setErrorMessageAction = (payload:string) =>     {
    return {
      type: TaskTypes.SET_ERROR_MESSAGE,
      payload
    };
  }
  export const deleteTaskByIdAction = (payload:number) =>     {
    return {
      type: TaskTypes.DELETE_TASK_BY_ID,
      payload
    };
  }
  export const addTaskAction = (payload:AddTaskFormValue) =>     {
    return {
      type: TaskTypes.ADD_TASK,
      payload
    };
  }






