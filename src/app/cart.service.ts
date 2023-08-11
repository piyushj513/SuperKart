import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: { product: Product; quantity: number }[] = [];

  constructor() {
    // Load cart items from localStorage on service initialization
    this.loadCartItems();
  }

  private saveCartItems(): void {
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    setTimeout(() => {
      window.location.reload();
    }, 500);
  }

  private loadCartItems(): void {
    const storedItems = localStorage.getItem('cartItems');
    if (storedItems) {
      this.cartItems = JSON.parse(storedItems);
    }
  }

  getItems(): { product: Product; quantity: number }[] {
    return this.cartItems;
  }

  addToCart(product: Product): void {
    const existingItem = this.cartItems.find(
      (item) => item.product.id === product.id
    );

    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cartItems.push({ product: product, quantity: 1 });
    }

    this.saveCartItems(); // Save cart items to localStorage
  }

  removeFromCart(item: { product: Product; quantity: number }): void {
    const itemIndex = this.cartItems.indexOf(item);
    if (itemIndex !== -1) {
      this.cartItems.splice(itemIndex, 1);
      this.saveCartItems(); // Save cart items to localStorage
      window.location.reload();
    }
  }

  clearCart(): void {
    this.cartItems = [];
    this.saveCartItems(); // Save cart items to localStorage
  }
}
