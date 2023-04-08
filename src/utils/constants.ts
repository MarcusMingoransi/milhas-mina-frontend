import { Role } from "../models/models";

export const ROLES = [Role.Admin, Role.User] as Role[];
export const COOKIE_NAME = "user";

export const INVALID_FIELDS = "Campos não preenchidos.";
export const INVALID_EMAIL_PASSWORD = "Email ou senha inválidos";
export const PASSWORD_NOT_MATCHED = "Senhas não conferem.";
export const SOMETHING_WENT_WRONG = "Algo deu errado!";

export const LOGIN_PAGE = "/";
export const REGISTER_PAGE = "/register";
export const ALL_ACCOR_PAGE = "/all-accor";
