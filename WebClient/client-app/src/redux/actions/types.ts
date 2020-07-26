export interface IUser {
  userId?: number;
  firstName: string;
  lastName: string;
  address: string;
  email: string;
  password: string;
}

export interface ICompany {
  companyId?: number;
  companyName: string;
  companyAddress: string;
}

export interface IErrorList {
  firstName: string;
  lastName: string;
  address: string;
  email: string;
  password: string;
}
