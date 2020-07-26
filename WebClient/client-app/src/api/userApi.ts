import { handleResponse, handleError } from "./apiUtils";
import { IUser } from "../redux/actions/types";

let baseUrl = "http://localhost:5000/api/user";

export function saveUser(user: IUser) {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(user),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function getUser(email: string, password: string) {
  let url = baseUrl + "/" + email + "/" + password;
  return fetch(url).then(handleResponse).catch(handleError);
}

export function getUsers() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}
