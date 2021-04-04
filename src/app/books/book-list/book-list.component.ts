import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Book } from '../book.model';
import { BookService } from '../book.service';
import { selectBookAction, setBooksListAction } from '../state/book.actions';
import { BooksAppState } from '../state/book.state';

@Component({
  selector: 'pm-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books:Book[]
  pageTitle='Books'
  constructor(private bookService:BookService,
    private store:Store<BooksAppState>) { }

  ngOnInit(): void {
    this.store.select(e=>e.books.booksList).subscribe(e=>{
      this.books=e
    });
    this.bookService.getAll().then(res=>{
      this.store.dispatch(setBooksListAction({books: res}));
    });
  }

  onClick(bookId){
    this.store.dispatch(selectBookAction({bookId}));
  }

}
