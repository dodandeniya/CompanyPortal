import * as actionTypes from "./actionTypes";
import { IUser } from "./types";
import { User } from "../../models/User";
import * as loginApi from "../../api/userApi";

export function loginSuccess(user: IUser): actionTypes.LoginActionTypes {
  return { type: actionTypes.LOGIN_SUCCESS, user };
}

export function logoutSuccess(user: IUser): actionTypes.LoginActionTypes {
  return { type: actionTypes.LOGOUT_SUCCESS, user };
}

export function createUserSuccess(user: IUser): actionTypes.LoginActionTypes {
  return { type: actionTypes.CREATE_USER_SUCCESS, user };
}

export function saveUser(user: IUser) {
  return async function (dispatch: any) {
    try {
      const savedUser = await loginApi.saveUser(user);
      dispatch(createUserSuccess(savedUser));
    } catch (error) {
      throw error;
    }
  };
}

export function loginUser(user: User) {
  return async function (dispatch: any) {
    try {
      const result = await loginApi.getUser(user.email, user.password);
      dispatch(loginSuccess(result));
    } catch (error) {
      throw error;
    }
  };
}

export function logoutUser() {
  return function (dispatch: any) {
    try {
      let user = {} as User;
      dispatch(logoutSuccess(user));
      localStorage.clear();
    } catch (error) {
      throw error;
    }
  };
}
