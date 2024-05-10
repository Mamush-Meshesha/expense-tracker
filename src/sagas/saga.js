import { call, delay, put, take } from "redux-saga/effects";

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

function* count() {
  while (false) {
    yield delay(1000);
    yield put({ type: "TEST_MESSAGE" });
  }
}
export { testSaga, count };
