import { createAction, createReducer, on } from "@ngrx/store";
import {initialProductState} from './product.state'
import {ProductActions, selectProductAction, setProductItems} from './product.actions';

export const ProductReducer = createReducer(
    initialProductState,
    on(createAction(ProductActions.toggleProductCode),(state)=>{
        return {
            ...state,
            DisplayProductCode :!state.DisplayProductCode
        }
    }),
    on(selectProductAction,(state, {product})=>{
        return {
            ...state,
            SelectedProduct :product
        }
    }),
    on(setProductItems,(state, {products})=>{
        debugger;
        return {
            ...state,
            ProductList :products
        }
    })
)