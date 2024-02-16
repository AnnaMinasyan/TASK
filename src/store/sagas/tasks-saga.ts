import { put, takeLatest } from 'redux-saga/effects';
import { taskApi } from '../../services/task-api';
import { TaskTypes, IAddTaskAction, IChangeTaskAction, IDeleteTaskByIdAction } from '../constants/tasks-constants';
import { getTasksListAction, setTasksListAction } from '../actions/tasks-actions';

function* onGetTasksList(): Generator {
    try {
        const tasks = yield taskApi.getTasks()                
        yield put(setTasksListAction(tasks))
    } catch (error) {
        console.log(error);
    }
}
function* onDeleteTaskById({ payload }: IDeleteTaskByIdAction): Generator {
    try {
        yield taskApi.deleteTaskById(payload)
        yield put(getTasksListAction())
    } catch (error) {
        console.log(error);
    }
}
function* onAddTask({ payload }: IAddTaskAction): Generator {
    try {
        yield taskApi.postTask(payload)
        yield put(getTasksListAction())
    } catch (error) {
        console.log(error);
    }
}
function* onChangeTask({ payload }: IChangeTaskAction): Generator {
    try {
        yield taskApi.putTask(payload.id, payload.body)
        yield put(getTasksListAction())
    } catch (error) {
        console.log(error);
    }
}
export function* watchTasksType() {
    yield takeLatest(TaskTypes.GET_TASKS_LIST, onGetTasksList);
    yield takeLatest(TaskTypes.DELETE_TASK_BY_ID, onDeleteTaskById);
    yield takeLatest(TaskTypes.ADD_TASK, onAddTask);
    yield takeLatest(TaskTypes.CHANGE_TASK, onChangeTask);

}
