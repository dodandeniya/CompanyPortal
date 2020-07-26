import * as actionTypes from "./actionTypes";
import { IUser } from "./types";
import { User } from "../../models/User";
import * as loginApi from "../../api/userApi";

export function loadUserssuccess(
  users: Array<IUser>
): actionTypes.UserActionTypes {
  return { type: actionTypes.LOAD_USERS_SUCCESS, users };
}

export function getUsers() {
  return async function (dispatch: any) {
    try {
      const result = await loginApi.getUsers();
      dispatch(loadUserssuccess(result));
    } catch (error) {
      throw error;
    }
  };
}
