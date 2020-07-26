import * as actionTypes from "./actionTypes";
import { ICompany } from "./types";
import * as companyApi from "../../api/companyApi";

export function loadCompaniesSuccess(
  companies: Array<ICompany>
): actionTypes.CompanyActionTypes {
  return { type: actionTypes.LOAD_COMPANIES_SUCCESS, companies };
}

export function getCompanies() {
  return async function (dispatch: any) {
    try {
      const result = await companyApi.getCompanies();
      dispatch(loadCompaniesSuccess(result));
    } catch (error) {
      throw error;
    }
  };
}
