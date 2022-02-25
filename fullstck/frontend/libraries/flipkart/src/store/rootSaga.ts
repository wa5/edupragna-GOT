import { all, fork } from "redux-saga/effects";
import todoSaga from './todo/saga/todosaga'

export function* rootSaga(){
    yield all([fork(todoSaga)])
}