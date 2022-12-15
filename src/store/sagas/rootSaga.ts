import { all } from "redux-saga/effects";
import albumsSaga from "./albums";

export default function* rootSaga() {
  yield all([
    albumsSaga(),
  ]);
}
