import { createFeatureSelector, createSelector } from "@ngrx/store";
import { BookState } from "./book.state";


export const featureBookSelector=createFeatureSelector<BookState>('books');

export const getSelectedBookId=createSelector(featureBookSelector,e=>e.selectedBookId);


export const getSelectedBook=createSelector(featureBookSelector,getSelectedBookId,(state,id)=>
state.booksList.find(e=>e.id==id));