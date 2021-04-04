import {  createReducer, on } from "@ngrx/store";
import { loginAction, logoutAction } from "./user.actions";
import { initialUserState, UserState } from "./user.state";

export const UserReducer = createReducer<UserState>(
    initialUserState,
    on(loginAction,(state, {user}):UserState=>{
        return {
            ...state,
            currentUser: user
        }
    }),
    on(logoutAction,(state):UserState=>{
        return {
            ...state,
            currentUser :null
        }
    })
)