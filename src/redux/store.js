import {applyMiddleware, combineReducers, createStore} from "redux";
import mainReducer from "./mainReducer";
import createSagaMiddleware from 'redux-saga'
import {rootWatcher} from "../sagas/index_sagas";


const sagaMiddleware = createSagaMiddleware()

let reducers = combineReducers({
    main: mainReducer
})

let store = createStore(reducers, applyMiddleware(sagaMiddleware))


sagaMiddleware.run(rootWatcher)
export default store
