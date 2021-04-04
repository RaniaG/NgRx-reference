import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';

import { AuthService } from '../user/auth.service';
import { getCurrentUser, getIsLoggedIn, getUserFeatureSelector } from '../user/state/user.state';

@Component({
  selector: 'pm-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {
  pageTitle = 'Acme Product Management';

  isLoggedIn: boolean;

  userName: string;

  constructor(private router: Router, private authService: AuthService,
    private store:Store<AppState>) { }

  ngOnInit() {
    this.store.select(getUserFeatureSelector)
    .subscribe(e=>
      {
        this.userName=e.currentUser?e.currentUser.userName:'';
      })
      
    this.store.select(getIsLoggedIn)
      .subscribe(e=>
        {
          this.isLoggedIn=e;
        })
  }

  logOut(): void {
    this.authService.logout();
    this.router.navigate(['/welcome']);
  }
}
