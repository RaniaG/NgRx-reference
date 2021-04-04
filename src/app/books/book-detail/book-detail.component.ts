import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Book } from '../book.model';
import { getSelectedBook } from '../state/book.selectors';
import { BooksAppState } from '../state/book.state';

@Component({
  selector: 'pm-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  book:Book;
  constructor(private store:Store<BooksAppState>) { }

  ngOnInit(): void {
    this.store.select(getSelectedBook)
    .subscribe(e=>this.book=e);
  }

}
