import { IUser, ICompany } from "../actions/types";

const user: IUser = {
  userId: undefined,
  firstName: "",
  lastName: "",
  address: "",
  email: "",
  password: "",
};

const users: Array<IUser> = [];
const companies: Array<ICompany> = [];

export default {
  user,
  users,
  companies,
};
