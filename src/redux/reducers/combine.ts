import { combineReducers } from "redux";
import colorReducer from "./index";

const reducers = combineReducers({
  name: colorReducer,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
