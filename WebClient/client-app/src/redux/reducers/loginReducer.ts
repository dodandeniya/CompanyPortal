import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";
import { IUser } from "../actions/types";

export default function loginReducer(
  state = initialState.user,
  action: actionTypes.LoginActionTypes
): IUser {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      return action.user;
    case actionTypes.LOGOUT_SUCCESS:
      return action.user;
    default:
      return state;
  }
}
