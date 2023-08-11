import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: { product: Product; quantity: number }[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartItems = this.cartService.getItems();
    console.log(this.cartItems);
  }

  removeFromCart(item): void {
    this.cartService.removeFromCart(item);
  }
  clearCart(): void {
    this.cartService.clearCart();
  }
}
