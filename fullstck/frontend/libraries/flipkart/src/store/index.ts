import { applyMiddleware } from "redux";
import { createStore } from "saga";
import rootReducer from "./rootReducer";
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import {composeWithDevTools} from 'redux-devtools-extension'
import { rootSaga } from "./rootSaga";


const sagaMilddleware=createSagaMiddleware();

const store=createStore(rootReducer,composeWithDevTools(applyMiddleware(sagaMilddleware,logger)))
sagaMilddleware.run(rootSaga)
export default store