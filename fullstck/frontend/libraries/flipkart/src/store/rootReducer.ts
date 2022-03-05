import { combineReducers } from "redux";
import todoReducer from './todo/reducer'
import productReducer from './productlist/reducers/reducer'
const rootReducer=combineReducers({
    todo:todoReducer,
    product:productReducer
})

export type AppState=ReturnType<typeof rootReducer>

export default rootReducer