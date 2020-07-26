import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";
import { IUser } from "../actions/types";

export default function userReducer(
  state = initialState.users,
  action: actionTypes.UserActionTypes
): Array<IUser> {
  switch (action.type) {
    case actionTypes.LOAD_USERS_SUCCESS:
      return action.users;
    default:
      return state;
  }
}
