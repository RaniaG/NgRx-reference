import { Product } from "../product";

export const initialProductState: ProductState = {
    DisplayProductCode : false,
    ProductList: [],
    SelectedProduct: null
}

export interface ProductState {
    DisplayProductCode: boolean;
    ProductList: Product[];
    SelectedProduct: Product;
}
