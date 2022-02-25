import { FETCH_TODO_FAUILER, FETCH_TODO_REQUEST, FETCH_TODO_SUCCESS } from "../actionTypes/todoActionType"
import { IFetchTodoFailurPayload, IFetchTodofauiler, IFetchTodoRequest, IFetchTodoSuccess, IFetchTodoSuccessPayload } from "../interface/todoInterface"

export const fetchTodoRequest=():IFetchTodoRequest=>({
    type:FETCH_TODO_REQUEST
})
export const fetchTodoSuccess=(payload:IFetchTodoSuccessPayload):IFetchTodoSuccess=>({
    type:FETCH_TODO_SUCCESS,
    payload
})
export const fetchTodoFauler=(payload:IFetchTodoFailurPayload):IFetchTodofauiler=>({
    type:FETCH_TODO_FAUILER,
    payload
})