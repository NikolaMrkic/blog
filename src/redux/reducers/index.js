import { combineReducers } from "redux";
import BlogReducer from "./BlogReducer";
import { reducer as formReducer } from "redux-form";

export default function createReducer(asyncReducers) {
  return combineReducers({
    //Global state
    blogState: BlogReducer,
    /**formReducer is an alias for reducer */
    //using formReducer should have the key "form" in the redux store this should be for all the form
    form: formReducer,
    ...asyncReducers,
  });
}
