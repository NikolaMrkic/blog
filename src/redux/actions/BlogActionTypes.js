import { createActionTypes } from "../../utils/index";

export const BLOG = createActionTypes("BLOG", [
  "GET",
  "GET_ONE",
  "RECEIVE",
  "SAVE",
  "PUT",
  "DELETE",
  "SUCCESS",
  "SUCCESS_ONE",
  "FAILURE",
]);

export default BLOG;
