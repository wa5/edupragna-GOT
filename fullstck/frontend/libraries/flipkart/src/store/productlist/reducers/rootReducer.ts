import { combineReducers } from "redux";
import { productReducer } from "./reducer";

export const productRootreducer=combineReducers({
    ProductState:productReducer
})