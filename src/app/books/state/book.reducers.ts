import { createReducer, on } from "@ngrx/store";
import { selectBookAction, setBooksListAction } from "./book.actions";
import { BookState, initialBookState } from "./book.state";

export const BookReducer = createReducer<BookState>(
    initialBookState,
    on(selectBookAction,(state,{bookId}):BookState=>{
        return {
            ...state,
            selectedBookId :bookId
        }
    }),
    on(setBooksListAction,(state, {books}):BookState=>{
        return {
            ...state,
            booksList :books,
        }
    })
)