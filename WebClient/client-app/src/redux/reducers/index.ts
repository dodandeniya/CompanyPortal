import { combineReducers } from "redux";
import login from "./loginReducer";
import users from "./userReducer";
import companies from "./companyReducer";

const rootReducer = combineReducers({
  login,
  users,
  companies,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
