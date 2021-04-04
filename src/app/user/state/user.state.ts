import { createFeatureSelector, createSelector } from "@ngrx/store";
import { User } from "../user";

export const initialUserState:UserState={
    currentUser:null
}

export interface UserState{
    currentUser: User;
}

export const getUserFeatureSelector = createFeatureSelector<UserState>('user');

export const getCurrentUser = createSelector(getUserFeatureSelector,e=>e.currentUser);


export const getIsLoggedIn = createSelector(getUserFeatureSelector,getCurrentUser,
    e=>!!e.currentUser)