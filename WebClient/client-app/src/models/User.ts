/*interface IUser {
  UserId?: number;
  FirstName: string;
  LastName: string;
  Address: string;
  Email: string;
  Password: string;
}*/
export type User = {
  firstName: string;
  userId?: number;
  lastName: string;
  address: string;
  email: string;
  password: string;
};
