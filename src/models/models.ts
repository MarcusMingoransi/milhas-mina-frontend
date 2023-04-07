export enum Role {
  User = "USER",
  Admin = "ADMIN",
}

export interface IUser {
  token?: string;
  name: string;
  email: string;
  roles?: Role[];
}
