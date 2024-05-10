import { createStore, combineReducers, applyMiddleware } from "redux"
import entriesReducer from "../reducers/entries.reducers"
import modalsReducers from "./../reducers/modals.reducers.js";
import createSagaMiddleware from "redux-saga"
import { initSaga } from "../sagas/index.js";

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware]

const configureStore = () => {
    const store = createStore(
        combineReducers({
            entries: entriesReducer,
            modals: modalsReducers
        }),
        applyMiddleware(...middlewares)
        
    );
    initSaga(sagaMiddleware)
    return store
}

export default configureStore