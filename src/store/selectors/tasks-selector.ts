import { ITaskDTO } from "@/interfaces/interfaces";

export const tasksSelector = (state: { tasksReducer: { tasks: ITaskDTO[] } }) => state.tasksReducer.tasks;
export const selectedTaskSelector = (state: { tasksReducer: { selectedTask: ITaskDTO } }) => state.tasksReducer.selectedTask;
export const errorMessageSelector = (state: { tasksReducer: { errorMessage: string } }) => state.tasksReducer.errorMessage;
