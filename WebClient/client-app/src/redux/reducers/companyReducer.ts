import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";
import { ICompany } from "../actions/types";

export default function companyReducer(
  state = initialState.companies,
  action: actionTypes.CompanyActionTypes
): Array<ICompany> {
  switch (action.type) {
    case actionTypes.LOAD_COMPANIES_SUCCESS:
      return action.companies;
    default:
      return state;
  }
}
