import { all, fork } from "redux-saga/effects";
import watchAllBlogSagas from "./BlogSaga";

export default function* rootSaga() {
  yield all([fork(watchAllBlogSagas)]);
}
