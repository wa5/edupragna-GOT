import axios, { AxiosResponse } from 'axios'
import {all, call, put, takeLatest} from 'redux-saga/effects'
import { fetchTodoFauler, fetchTodoSuccess } from '../ActionGenerator/actions'
import { FETCH_TODO_REQUEST } from '../actionTypes/todoActionType'
import { ITodo } from '../interface/todoInterface'

const getTodos=()=>axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos')

//worker saga
function* getApiDataSaga(){
    try{
        const response:AxiosResponse<ITodo[]>=yield call(getTodos)
        yield put(fetchTodoSuccess({todo:response.data}))
    }catch(e:any){
        yield put(fetchTodoFauler({error:e.message}))

    }
   
}



function* todoWatcherSaga(){
yield all([takeLatest(FETCH_TODO_REQUEST,getApiDataSaga)])
}

export default todoWatcherSaga