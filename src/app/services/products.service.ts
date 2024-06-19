import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private readonly http: HttpClient) {}

  getProducts() {
    return this.http.get(environment.apiUrl + '/products').pipe(
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

  getProduct(id: number) {
    return this.http.get(environment.apiUrl + '/products/' + id).pipe(
      map((product: any) => ({
        ...product,
        image: environment.baseUrl + product.image,
      }))
    );
  }
}
