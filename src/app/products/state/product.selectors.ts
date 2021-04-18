import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductState } from './product.state';

const getProductFeatureState = createFeatureSelector<ProductState>('products');

export const getDisplayProductCode = createSelector(
  getProductFeatureState,
  (state) => state.DisplayProductCode
);

export const getProductList = createSelector(
  getProductFeatureState,
  (state) => state.ProductList
);

export const getSelectedProductId = createSelector(
  getProductFeatureState,
  (state) => state.SelectedProductId
);

export const getSelectedProduct = createSelector(
  getProductFeatureState,
  getSelectedProductId,
  (state, selectedProductId) => {
    if (selectedProductId === 0) {
      return {
        id: 0,
        productName: 'New Product',
        productCode: null,
        description: null,
        starRating: 0,
      };
    } else {
      return selectedProductId
        ? state.ProductList.find((e) => e.id === selectedProductId)
        : null;
    }
  }
);
