import { all, fork } from "redux-saga/effects";
import todoSaga from './todo/saga/todosaga'
import productSaga from './productlist/saga/productsaga'

export function* rootSaga(){
    yield all([fork(productSaga),fork(todoSaga)])
}