import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { map, tap } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { CartItem } from '../models/cart-item';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems = signal<CartItem[]>([]);

  constructor(private readonly http: HttpClient) {}

  getCart() {
    return this.http.get(environment.apiUrl + '/cart').pipe(
      map((products: any) =>
        products.map((t: any) => {
          return {
            ...t,
            image: environment.baseUrl + t.image,
          };
        })
      )
    );
  }

  addItem(item: CartItem) {
    return this.http
      .post(environment.apiUrl + '/cart', {
        item,
      })
      .pipe(
        tap((t: any) => {
          debugger;
        }),
        map((products: any) =>
          products.map((t: any) => {
            return {
              ...t,
              image: environment.baseUrl + t.image,
            };
          })
        )
      );
  }
}
