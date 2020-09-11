import { createAction } from "../../utils/index";
import { BLOG } from "./BlogActionTypes";

export const blogAction = {
  request: () =>
    createAction(BLOG.GET, {
      fetching: true,
      success: false,
      error: null,
    }),
  // requestOne: (id) =>
  //   createAction(BLOG.GET_ONE, {
  //     id,
  //     fetching: true,
  //     success: true,
  //     error: null,
  //   }),
  save: (data) =>
    createAction(BLOG.SAVE, {
      /// ovo me je zezalo da ubacim objekat u array nakon responsa
      ...data,
      fetching: true,
      success: false,
      error: null,
    }),
  recive: (data) =>
    createAction(BLOG.RECEIVE, {
      ...data,
    }),
  put: (blogForEdit, data) =>
    createAction(BLOG.PUT, {
      blogForEdit,
      ...data,
      fetching: true,
      success: false,
      error: null,
    }),
  delete: (id) =>
    createAction(BLOG.DELETE, {
      id,
      fetching: true,
      success: false,
      error: null,
    }),
  success: (data) =>
    createAction(BLOG.SUCCESS, {
      ...data,
      fetching: true,
      success: true,
      error: null,
    }),
  successOne: (data) =>
    createAction(BLOG.SUCCESS_ONE, {
      ...data,
      fetching: true,
      success: true,
      error: null,
    }),
  failure: (error) =>
    createAction(BLOG.FAILURE, {
      ...error,
      fetching: false,
      success: false,
    }),
};

export default blogAction;
