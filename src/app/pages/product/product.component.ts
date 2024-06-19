import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  productId: any;
  product!: Product;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.productId = params['id'];
      this.productsService
        .getProduct(this.productId)
        .pipe(first())
        .subscribe((product: Product) => {
          this.product = product;
        });
    });
  }
}
