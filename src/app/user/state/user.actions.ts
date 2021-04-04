import { createAction, props } from "@ngrx/store";
import { User } from "../user";

export class UserActions{
    static login:string = 'login';
    static logout:string ='logout';
}

export const loginAction = createAction(UserActions.login, props<{user:User}>());
export const logoutAction = createAction(UserActions.logout);
