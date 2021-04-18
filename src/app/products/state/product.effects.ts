import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, map, mergeMap } from 'rxjs/operators';
import { Product } from '../product';
import { ProductService } from '../product.service';
import {
  saveProductAction,
  saveProductResultAction,
  loadProductsAction,
  setProductItems,
  deleteProduct,
  deleteProductResultAction,
} from './product.actions';

@Injectable()
export class ProductEffects {
  constructor(
    private actions: Actions,
    private productService: ProductService
  ) {}
  loadProducts$ = createEffect(() => {
    return this.actions.pipe(
      //listen on action type
      ofType(loadProductsAction),
      mergeMap(() =>
        //preforms a process
        this.productService.getProducts().pipe(
          map((res: Product[]) => {
            //returns a new action
            return setProductItems({ products: res });
          })
        )
      )
    );
  });
  updateProduct$ = createEffect(() =>
    this.actions.pipe(
      ofType(saveProductAction),
      mergeMap(({ product }) => {
        if (product.id === 0) {
          return this.productService.createProduct(product).pipe(
            map(
              () => {
                return saveProductResultAction({ product });
              },
              catchError((error) => {
                return of(saveProductResultAction({ error }));
              })
            )
          );
        } else {
          return this.productService.updateProduct(product).pipe(
            map(
              () => {
                return saveProductResultAction({ product });
              },
              catchError((error) => {
                return of(saveProductResultAction({ error }));
              })
            )
          );
        }
      })
    )
  );
  deleteProducts$ = createEffect(() => {
    return this.actions.pipe(
      //listen on action type
      ofType(deleteProduct),
      concatMap(({ productId }) =>
        //preforms a process
        this.productService.deleteProduct(productId).pipe(
          map(() => {
            //returns a new action
            return deleteProductResultAction({ productId });
          }),
          catchError((error) => {
            return of(deleteProductResultAction({ error }));
          })
        )
      )
    );
  });
}
