import { IUser, ICompany } from "./types";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS";
export const LOAD_USERS_SUCCESS = "LOAD_USERS_SUCCESS";
export const LOAD_COMPANIES_SUCCESS = "LOAD_COMPANIES_SUCCESS";

interface ILoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  user: IUser;
}

interface ILLogOutSuccessAction {
  type: typeof LOGOUT_SUCCESS;
  user: IUser;
}

interface ICreateUserSuccessAction {
  type: typeof CREATE_USER_SUCCESS;
  user: IUser;
}

interface ILoadUserssuccessAction {
  type: typeof LOAD_USERS_SUCCESS;
  users: Array<IUser>;
}

interface ILoadCompaniessuccessAction {
  type: typeof LOAD_COMPANIES_SUCCESS;
  companies: Array<ICompany>;
}

export type LoginActionTypes =
  | ILoginSuccessAction
  | ICreateUserSuccessAction
  | ILLogOutSuccessAction;

export type UserActionTypes = ILoadUserssuccessAction;

export type CompanyActionTypes = ILoadCompaniessuccessAction;
