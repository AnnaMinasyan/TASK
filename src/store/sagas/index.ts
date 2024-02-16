import {all} from 'redux-saga/effects';
import {watchTasksType} from './tasks-saga';

export default function* rootSaga() {
  yield all([
    watchTasksType(),
  ]);
}
