import { Component, Input, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { CartItemCardComponent } from 'src/app/components/cart-item-card/cart-item-card.component';
import { CartItem } from 'src/app/models/cart-item';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  standalone: true,
  imports: [CartItemCardComponent],
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  constructor(private readonly cartService: CartService) {}

  ngOnInit(): void {
    this.cartService
      .getCart()
      .pipe(first())
      .subscribe((cartItems: any) => {
        this.cartItems = cartItems;
      });
  }
}
