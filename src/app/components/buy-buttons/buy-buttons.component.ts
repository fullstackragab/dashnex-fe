import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CartService } from '../../services/cart.service';
import { MessageService } from 'primeng/api';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-buy-buttons',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './buy-buttons.component.html',
  styleUrl: './buy-buttons.component.css',
})
export class BuyButtonsComponent {
  @Input() product!: Product;

  constructor(
    private cartService: CartService,
    private messageService: MessageService
  ) {}

  onBuyProduct() {
    this.cartService.addItem({
      product: {
        id: this.product.id,
        title: this.product.title,
        image: this.product.image,
        price: this.product.price,
      },
      amount: 1,
    });
    this.messageService.add({
      summary: 'Added',
      detail: 'Prouct added to the cart',
      severity: 'info',
    });
  }
}
