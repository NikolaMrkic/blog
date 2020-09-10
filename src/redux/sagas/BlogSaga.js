import { put, call, takeLatest, all } from "redux-saga/effects";
import DataUtils from "../../utils/DataUtils";
import { blogAction } from "../actions/index";
import { BLOG } from "../actions/BlogActionTypes";

function* handleGetBlogs() {
  console.log("DOVLACIMMMMMMMMMMMMMMMMMMMMMM");

  try {
    const { data } = yield call(DataUtils.get, `api/BlogPosts`);
    console.log("data from saga", data);
    yield put(blogAction.success({ data }));
  } catch (e) {
    yield put(blogAction.failure({ error: { ...e } }));
  }
}

function* handleGetOneBlog(action) {
  try {
    const { id } = action.payload;
    const { data } = yield call(DataUtils.get, `api/BlogPosts` + id);
    console.log("data from saga handleGetOne", data);
    yield put(blogAction.success({ data }));
  } catch (e) {
    yield put(blogAction.failure({ error: { ...e } }));
  }
}

function* handlePostBlog(action) {
  console.log("AKCIJAAAAAAAA", action);
  const blog = action.payload;
  console.log("BLOG IZ SAGE ", blog);

  try {
    const response = yield call(DataUtils.post, `api/BlogPosts`, blog);
    console.log("response from saga handlePost", response);
    console.log("response.data from saga handlePost", response.data);
    const blogResponse = response.data;
    console.log("DOVUKAOOOOOOO responseee", blogResponse);
    yield put(blogAction.recive({ blogResponse }));
  } catch (e) {
    yield put(blogAction.failure({ error: { ...e } }));
  }
}

export function* watchAllUserAdminSagas() {
  yield all([
    takeLatest(BLOG.GET, handleGetBlogs),
    takeLatest(BLOG.GET_ONE, handleGetOneBlog),
    takeLatest(BLOG.SAVE, handlePostBlog),
    // takeLatest(BLOG.PUT, handlePut),
    // takeLatest(BLOG.PATCH, handlePatch),
    // takeLatest(BLOG.DELETE, handleDelete),
  ]);
}

export default watchAllUserAdminSagas;
