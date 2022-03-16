import {Action} from 'redux'
export class BaseAction<T> implements Action<string>{
    public type!: string;
    public payload!: T;
}