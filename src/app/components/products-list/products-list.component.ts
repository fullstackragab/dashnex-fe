import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { first } from 'rxjs';
import { Product } from '../../models/product';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
  standalone: true,
  imports: [ProductCardComponent],
})
export class ProductsListComponent implements OnInit {
  products: Product[] = [];
  constructor(private readonly productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService
      .getProducts()
      .pipe(first())
      .subscribe((products: any) => {
        this.products = products;
      });
  }
}
