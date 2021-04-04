import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { logoutAction, loginAction } from './state/user.actions';
import { getIsLoggedIn } from './state/user.state';
import { User } from './user';


@Injectable({
    providedIn: 'root',
})
export class AuthService {
    redirectUrl: string;
    isLoggedIn: boolean;

    constructor(private store:Store<AppState>) { }

    ngOnInit(): void {
        this.store.select(getIsLoggedIn)
        .subscribe(e=>{
            this.isLoggedIn=e;
        });
    }


    login(userName: string, password: string): void {
        // Code here would log into a back end service
        // and return user information
        // This is just hard-coded here.
        const currentUser = {
            id: 2,
            userName,
            isAdmin: false
        };
        this.store.dispatch(loginAction( {user: currentUser} ))
    }

    logout(): void {
        this.store.dispatch(logoutAction())
    }
}
