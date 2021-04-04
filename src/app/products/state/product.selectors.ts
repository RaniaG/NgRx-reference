import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductState } from "./product.state";

const getProductFeatureState = createFeatureSelector<ProductState>('products');

export const getDisplayProductCode = createSelector(
    getProductFeatureState, state=> state.DisplayProductCode
)

export const getProductList = createSelector(
    getProductFeatureState, state=> state.ProductList
)

export const getSelectedProduct = createSelector(
    getProductFeatureState, state=> state.SelectedProduct
)