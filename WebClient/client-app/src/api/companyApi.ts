import { handleResponse, handleError } from "./apiUtils";
import { IUser } from "../redux/actions/types";

let baseUrl = "http://localhost:5000/api/companies";

export function getCompanies() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}
