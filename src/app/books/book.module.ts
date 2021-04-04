import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './book-list/book-list.component';
import { BookShellComponent } from './book-shell/book-shell.component';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { BookReducer } from './state/book.reducers';
import { BookDetailComponent } from './book-detail/book-detail.component';

const bookRoutes: Routes = [
  { path: '', component: BookShellComponent }
];

@NgModule({
  declarations: [BookListComponent, BookShellComponent, BookDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(bookRoutes),
    StoreModule.forFeature('books',BookReducer)
  ]
})
export class BookModule { }
