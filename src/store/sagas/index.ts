import { takeLatest } from "redux-saga/effects";

function* watchConsoleHello() {
  console.log(" Hey from saga");
}

export function* rootSaga() {
  yield takeLatest("HELLO", watchConsoleHello);
}
