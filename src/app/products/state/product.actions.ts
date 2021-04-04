import { createAction, props } from "@ngrx/store";
import { Product } from "../product";

export class ProductActions{
    static toggleProductCode:string = 'toggleProductCode';
    static selectItem:string = 'selectItem';
    static setProductItems:string = 'setProductItems';
    static selectProduct:string = 'selectProduct';
}

export const selectProductAction = createAction(ProductActions.selectProduct, props<{product: Product}>());
export const setProductItems = createAction(ProductActions.setProductItems, props<{products: Product[]}>());

