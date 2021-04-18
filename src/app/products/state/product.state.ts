import { Product } from '../product';

export const initialProductState: ProductState = {
  DisplayProductCode: false,
  ProductList: [],
  SelectedProductId: null,
  Error: null,
};

export interface ProductState {
  DisplayProductCode: boolean;
  ProductList: Product[];
  SelectedProductId: number;
  Error: string;
}
