import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';

import { Subscription } from 'rxjs';
import { AppState } from 'src/app/state/app.state';

import { Product } from '../product';
import { ProductService } from '../product.service';
import { ProductActions, selectProductAction, setProductItems } from '../state/product.actions';
import { getSelectedProduct, getDisplayProductCode, getProductList } from '../state/product.selectors';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle = 'Products';
  errorMessage: string;

  displayCode: boolean;

  products: Product[];

  // Used to highlight the selected product in the list
  selectedProduct: Product | null;
  sub: Subscription;

  constructor(private productService: ProductService,
    private store: Store<AppState>) { }

  ngOnInit(): void {

    this.store.select(getProductList)
    .subscribe(e=>{
      this.products = e;
    })

    this.store.select(getDisplayProductCode)
    .subscribe(e=>{
      this.displayCode = e;
    })

    this.store.select(getSelectedProduct)
    .subscribe(e=>{
      this.selectedProduct = e;
    })
  }

  checkChanged(): void {
    this.store.dispatch({type:ProductActions.toggleProductCode})
  }

  newProduct(): void {
    this.store.dispatch(selectProductAction({product: this.productService.newProduct()}));
  }

  productSelected(product: Product): void {
    this.store.dispatch(selectProductAction({product}));
  }

}
