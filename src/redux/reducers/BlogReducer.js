import { BLOG } from "../actions/BlogActionTypes";

const initialState = {
  blogs: [],
  currentUser: {},
  fetching: false,
  success: false,
  error: null,
};

export default function BlogReducer(state = initialState, action) {
  switch (action.type) {
    case BLOG.GET:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case BLOG.GET_ONE:
      return {
        ...state,
        currentUser: action.payload.data,
      };
    case BLOG.RECEIVE:
      return {
        ...state,
        users: [...state.users, action.payload.users.userResponse],
        fetching: true,
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
        users: action.payload.data,
        fetching: true,
        success: true,
        error: null,
      };
    case BLOG.SUCCESS_ONE:
      return state.merge({ currentUser: action.payload.data });
    case BLOG.FAILURE:
      break;
    default:
      return {
        ...state,
      };
  }
}
