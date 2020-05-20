import { put, all, takeEvery, delay } from "redux-saga/effects";
import { getUserList } from "../actions";

export function* incrementAsync() {
  yield delay(1000);
  yield put(getUserList());
}

export function* rootSaga() {
  yield all([yield takeEvery("INCREMENT_ASYNC", incrementAsync)]);
}
