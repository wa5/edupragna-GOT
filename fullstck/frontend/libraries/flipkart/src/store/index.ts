import { applyMiddleware,createStore } from "redux";

import rootReducer from "./rootReducer";
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import {composeWithDevTools} from 'redux-devtools-extension';
import { rootSaga } from "./rootSaga";


const sagaMiddleware=createSagaMiddleware();

const store=createStore(rootReducer,composeWithDevTools(applyMiddleware(sagaMiddleware)))
sagaMiddleware.run(rootSaga)
export default store