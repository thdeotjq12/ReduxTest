import { combineReducers } from "redux";
import counter from "./counter";
import todos from "./todos";
// 스토어 등록
const rootReducer = combineReducers({
  counter,
  todos
});

export default rootReducer;
