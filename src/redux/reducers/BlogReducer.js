import { BLOG } from "../actions/BlogActionTypes";

const initialState = {
  success: false,
  blogs: { resultData: [] },
  blogForEdit: {},
  errorMessage: null,
};

export default function BlogReducer(state = initialState, action) {
  switch (action.type) {
    case BLOG.GET:
      return {
        ...state,
      };
    //for post
    case BLOG.RECEIVE:
      return {
        ...state,
        blogs: {
          resultData: [...state.blogs.resultData, action.payload.blogResponse],
        },
        success: true,
        errorMessage: null,
      };
    case BLOG.SUCCESS:
      return {
        ...state,
        blogs: action.payload.data,
        fetching: true,
        success: true,
        error: null,
      };
    case BLOG.SUCCESS_ONE:
      return {
        ...state,
        blogs: action.payload.data,
        fetching: true,
        success: true,
        error: null,
      };
    case BLOG.FAILURE:
      break;
    default:
      return {
        ...state,
      };
  }
}
