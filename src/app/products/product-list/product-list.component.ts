import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable, Subscription } from 'rxjs';
import { AppState } from 'src/app/state/app.state';

import { Product } from '../product';
import { ProductService } from '../product.service';
import {
  loadProductsAction,
  ProductActions,
  selectProductAction,
  setProductItems,
} from '../state/product.actions';
import {
  getSelectedProduct,
  getDisplayProductCode,
  getProductList,
} from '../state/product.selectors';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  pageTitle = 'Products';
  errorMessage: string;

  displayCode: boolean;

  products$: Observable<Product[]>;

  // Used to highlight the selected product in the list
  selectedProduct: Product | null;
  sub: Subscription;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.products$ = this.store.select(getProductList);

    this.store.select(getDisplayProductCode).subscribe((e) => {
      this.displayCode = e;
    });

    this.store.select(getSelectedProduct).subscribe((e) => {
      this.selectedProduct = e;
    });

    this.store.dispatch(loadProductsAction());
  }

  checkChanged(): void {
    this.store.dispatch({ type: ProductActions.toggleProductCode });
  }

  newProduct(): void {
    this.store.dispatch(selectProductAction({ productId: 0 }));
  }

  productSelected(product: Product): void {
    this.store.dispatch(selectProductAction({ productId: product.id }));
  }
}
