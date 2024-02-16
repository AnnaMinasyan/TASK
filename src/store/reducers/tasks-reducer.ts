import { ITaskDTO } from '@/interfaces/interfaces';
import { TaskTypes } from '../constants/tasks-constants';

export type InitialStateType = {
 tasks?:ITaskDTO[];
 selectedTask?:ITaskDTO;
 errorMessage?:string
};

export const initialState: InitialStateType = {};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const tasksReducer = (state = initialState, action:any) => {
  switch (action.type) {
    case TaskTypes.SET_TASKS_LIST:
      return {
        ...state,
        tasks: action.payload,
      };
      case TaskTypes.SET_SELECTED_TASK:
        return {
          ...state,
          selectedTask: action.payload,
        };
        case TaskTypes.SET_ERROR_MESSAGE:
        return {
          ...state,
          errorMessage: action.payload,
        };
    default:
      return state;
  }
};
export default tasksReducer;
