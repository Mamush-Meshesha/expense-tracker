import * as entriesSaga from "./entriesSaga";
import * as entriesSagaDelete from "./entriesSagaDelete";
import * as entrySagaAdd from "./entrySagaAdd"
// import saga from './saga.js'
export function initSaga(sagaMiddleware) {
  Object.values(entriesSagaDelete).forEach(
    sagaMiddleware.run.bind(sagaMiddleware)
  );

  Object.values(entriesSaga).forEach(sagaMiddleware.run.bind(sagaMiddleware));

  Object.values(entrySagaAdd).forEach(sagaMiddleware.run.bind(sagaMiddleware));
}
