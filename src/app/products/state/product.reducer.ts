import { createAction, createReducer, on } from '@ngrx/store';
import { initialProductState } from './product.state';
import {
  deleteProductResultAction,
  ProductActions,
  saveProductResultAction,
  selectProductAction,
  setProductItems,
} from './product.actions';

export const ProductReducer = createReducer(
  initialProductState,
  on(createAction(ProductActions.toggleProductCode), (state) => {
    return {
      ...state,
      DisplayProductCode: !state.DisplayProductCode,
    };
  }),
  on(selectProductAction, (state, { productId }) => {
    return {
      ...state,
      SelectedProductId: productId,
    };
  }),
  on(setProductItems, (state, { products }) => {
    return {
      ...state,
      ProductList: products,
    };
  }),
  on(saveProductResultAction, (state, { product, error }) => {
    if (product) {
      const products = [...state.ProductList];
      const productIndex = products.findIndex((e) => e.id === product.id);
      if (productIndex < 0) products.push(product);
      else products[productIndex] = product;
      return {
        ...state,
        ProductList: products,
        SelectedProductId: product.id,
        Error: null,
      };
    } else {
      return {
        ...state,
        Error: error,
      };
    }
  }),
  on(deleteProductResultAction, (state, { productId, error }) => {
    if (productId != null) {
      const products = [...state.ProductList];
      const productIndex = products.findIndex((e) => e.id === productId);
      if (productIndex >= 0) products.splice(productIndex, 1);
      return {
        ...state,
        ProductList: products,
        SelectedProductId: null,
        Error: null,
      };
    } else {
      return {
        ...state,
        Error: error,
      };
    }
  })
);
