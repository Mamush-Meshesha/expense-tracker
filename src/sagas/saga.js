import { call, delay, fork, put, take } from "redux-saga/effects";

const dueble = (number) => {
  return number + 2;
};
function* testSaga() {
  while (true) {
    console.log("starting saga");
    const a = yield call(dueble, 2);
    console.log(a);
    const b = yield dueble(3);
    console.log(b);
  }
}

function* doNothing() {
  console.log("i have been called");
  yield delay(1000);
  console.log("am donig nothing");
}
function* testSageFork() {
  while (true) {
    yield take("test message");
    yield fork(doNothing);
    yield fork(doNothing);

    yield fork(doNothing);
  }
}
function* count() {
  while (true) {
    yield delay(5000);
    yield put({ type: "TEST_MESSAGE", payload: 1000 });
  }
}
export { testSaga, count, testSageFork };
