import { BLOG } from "../actions/BlogActionTypes";

const initialState = {
  success: false,
  blogs: [],
  blog: {},
  errorMessage: null,
};

export default function BlogReducer(state = initialState, action) {
  switch (action.type) {
    case BLOG.GET:
      return {
        ...state,
        blogs: [...state.blogs, action.payload],
      };
    case BLOG.GET_ONE:
      return {
        ...state,
        blog: action.payload.data,
      };
    case BLOG.RECEIVE:
      return {
        ...state,
        blogs: [...state.blogs, action.payload.blogs.blogResponse],
        success: true,
        error: null,
      };
    case BLOG.SAVE:
      return {
        ...state,
      };
    case BLOG.UPDATE:
    case BLOG.DELETE:
    case BLOG.SUCCESS:
      return {
        ...state,
        blogs: action.payload.data,
        success: true,
        error: null,
      };
    case BLOG.SUCCESS_ONE:
      return state.merge({ blog: action.payload.data });
    case BLOG.FAILURE:
      break;
    default:
      return {
        ...state,
      };
  }
}
