import { createAction, props } from "@ngrx/store";
import { Book } from "../book.model";

export class BookActions{
    static setBooksList:string = 'setBooksList';
    static selectBook:string = 'selectBook';
}

export const selectBookAction = createAction(BookActions.selectBook, props<{bookId:number|null}>());
export const setBooksListAction = createAction(BookActions.setBooksList, props<{books: Book[]}>());

