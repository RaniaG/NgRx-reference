import { createAction, props } from '@ngrx/store';
import { Product } from '../product';

export class ProductActions {
  static toggleProductCode: string = 'toggleProductCode';
  static selectItem: string = 'selectItem';
  static setProductItems: string = 'setProductItems';
  static selectProduct: string = 'selectProduct';
  static loadProducts: string = 'loadProducts';
  static saveProduct: string = 'saveProduct';
  static saveProductResult: string = 'saveProductResult';
  static deleteProduct: string = 'deleteProduct';
  static deleteProductResult: string = 'deleteProductResult';
}

export const loadProductsAction = createAction(ProductActions.loadProducts);
export const selectProductAction = createAction(
  ProductActions.selectProduct,
  props<{ productId: number }>()
);
export const setProductItems = createAction(
  ProductActions.setProductItems,
  props<{ products: Product[] }>()
);
export const saveProductAction = createAction(
  ProductActions.saveProduct,
  props<{ product: Product }>()
);
export const saveProductResultAction = createAction(
  ProductActions.saveProductResult,
  props<{ product?: Product; error?: string }>()
);
export const deleteProduct = createAction(
  ProductActions.deleteProduct,
  props<{ productId: number }>()
);
export const deleteProductResultAction = createAction(
  ProductActions.deleteProductResult,
  props<{ productId?: number; error?: string }>()
);
