import { AppState } from '../../state/app.state';
import { Book } from '../book.model';

export interface BookState{
    booksList: Book[],
    selectedBookId: number | null
}

export const initialBookState: BookState = {
    booksList:[],
    selectedBookId:null
}

export interface BooksAppState extends AppState{
    books: BookState
}