import { FETCH_TODO_FAUILER, FETCH_TODO_REQUEST, FETCH_TODO_SUCCESS } from "../actionTypes/todoActionType";

export interface ITodoState{
    pending:boolean,
    todo:ITodo[],
    error:string|null
}

export interface ITodo{
userId: number,
id: number,
title: string,
completed: boolean
}
export interface IFetchTodoSuccessPayload{
    todo:ITodo[]
}
export interface IFetchTodoFailurPayload{
    error:string
}
export interface IFetchTodoRequest{
    type:typeof FETCH_TODO_REQUEST
}

export interface IFetchTodoSuccess{
    type:typeof FETCH_TODO_SUCCESS,
    payload:IFetchTodoSuccessPayload
}
export interface IFetchTodofauiler{
    type:typeof FETCH_TODO_FAUILER,
    payload:IFetchTodoFailurPayload
}


export type ITodoAllAction=IFetchTodoRequest|IFetchTodoSuccess|IFetchTodofauiler
