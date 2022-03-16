import { combineReducers } from "redux";
import { productRootreducer } from "./productlist/reducers/rootReducer";
import todoReducer from './todo/reducer'

const rootReducer=combineReducers({
    todo:todoReducer,
    app:productRootreducer,
    domain:productRootreducer
})

export type AppState=ReturnType<typeof rootReducer>

export default rootReducer