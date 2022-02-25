import { FETCH_TODO_FAUILER, FETCH_TODO_REQUEST, FETCH_TODO_SUCCESS } from "./actionTypes/todoActionType"
import { ITodoAllAction, ITodoState } from "./interface/todoInterface"

const initalState:ITodoState={
    pending:false,
    todo:[],
    error:null
}


export default (state=initalState,action:ITodoAllAction)=>{

switch(action.type){
    case FETCH_TODO_REQUEST:
    return {
        ...state,
        pending:true
    } 
    case FETCH_TODO_SUCCESS:
    return {
        ...state,
        pending:false,
        todo:action.payload.todo,
        error:null

    } 
    case FETCH_TODO_FAUILER:
    return {
        ...state,
        pending:false,
        todo:[],
    error:action.payload.error
    } 
    default:
        return {
            ...state
        }
}

}