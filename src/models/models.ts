export enum Role {
  User,
  Administrator,
}

export interface IUser {
  name: string;
  email: string;
  roles: Role[];
}
