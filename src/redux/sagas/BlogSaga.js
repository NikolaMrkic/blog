import { put, call, takeLatest, all } from "redux-saga/effects";
import DataUtils from "../../utils/DataUtils";
import { blogAction } from "../actions/index";
import { BLOG } from "../actions/BlogActionTypes";

function* handleGetBlogs() {
  try {
    const { data } = yield call(DataUtils.get, `/api/BlogPosts`);
    yield put(blogAction.success({ data }));
  } catch (e) {
    yield put(blogAction.failure({ error: { ...e } }));
  }
}

function* handlePostBlog(action) {
  const blog = action.payload;

  try {
    const response = yield call(DataUtils.post, `/api/BlogPosts`, blog);
    const blogResponse = response.data;
    yield put(blogAction.recive({ blogResponse }));
  } catch (e) {
    yield put(blogAction.failure({ error: { ...e } }));
  }
}

function* handleDelete(action) {
  const blogId = action.payload.id;
  const response = yield call(DataUtils.del, `/api/BlogPosts/` + blogId);
  try {
    const blogResponse = response.data;
    const { data } = yield call(DataUtils.get, `/api/BlogPosts`);
    yield put(blogAction.success({ data }));
  } catch (e) {
    yield put(blogAction.failure({ error: { ...e } }));
  }
}

function* handlePut(action) {
  const blogId = action.payload.blogForEdit.id;
  const blogForEdit = action.payload.blogForEdit;
  try {
    const response = yield call(
      DataUtils.put,
      `/api/BlogPosts/` + blogId,
      blogForEdit
    );
    const blogResponseStatus = response.status;
    const noContent = 204;

    if (blogResponseStatus === noContent) {
      const { data } = yield call(DataUtils.get, `/api/BlogPosts`);
      yield put(blogAction.successOne({ data }));
    }
  } catch (e) {
    yield put(blogAction.failure({ error: { ...e } }));
  }
}

export function* watchAllUserAdminSagas() {
  yield all([
    takeLatest(BLOG.GET, handleGetBlogs),
    takeLatest(BLOG.SAVE, handlePostBlog),
    takeLatest(BLOG.PUT, handlePut),
    takeLatest(BLOG.DELETE, handleDelete),
  ]);
}

export default watchAllUserAdminSagas;
