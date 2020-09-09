// import { put, call, takeLatest, all } from "redux-saga/effects";
// // import DataUtils from "../../../DataUtils";
// import { blogAction } from "../actions/index";
// import { BLOG } from "../actions/BlogActionTypes";

// function* handleGetAdminUsers() {
//   console.log("DOVLACIMMMMMMMMMMMMMMMMMMMMMM");

//   try {
//     const { data } = yield call(DataUtils.get, `/admin/users`);
//     console.log("data from saga", data);
//     yield put(blogAction.success({ data }));
//   } catch (e) {
//     yield put(blogAction.failure({ error: { ...e } }));
//   }
// }

// function* handleGetOne(action) {
//   try {
//     const { id } = action.payload;
//     const { data } = yield call(DataUtils.get, `/admin/user/` + id);
//     console.log("data from saga handleGetOne", data);
//     yield put(blogAction.success({ data }));
//   } catch (e) {
//     yield put(blogAction.failure({ error: { ...e } }));
//   }
// }

// function* handlePost(action) {
//   console.log("AKCIJAAAAAAAA", action);
//   const user = action.payload;
//   console.log("USER IZ SAGE ", user);

//   try {
//     const response = yield call(DataUtils.post, `/admin/user`, user);
//     console.log("response from saga handlePost", response);
//     console.log("response.data from saga handlePost", response.data);
//     const userResponse = response.data;
//     console.log("DOVUKAOOOOOOO responseee", userResponse);
//     yield put(blogAction.recive({ userResponse }));
//   } catch (e) {
//     yield put(blogAction.failure({ error: { ...e } }));
//   }
// }

// export function* watchAllUserAdminSagas() {
//   yield all([
//     takeLatest(BLOG.GET, handleGetAdminUsers),
//     takeLatest(BLOG.GET_ONE, handleGetOne),
//     takeLatest(BLOG.SAVE, handlePost),
//     // takeLatest(BLOG.PUT, handlePut),
//     // takeLatest(BLOG.PATCH, handlePatch),
//     // takeLatest(BLOG.DELETE, handleDelete),
//   ]);
// }

// export default watchAllUserAdminSagas;
