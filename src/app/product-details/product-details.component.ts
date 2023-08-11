import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../product';
import { CartService } from '../cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  product: Product;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private snackBar: MatSnackBar
  ) {}
  ngOnInit() {
    this.getProduct();
  }

  getProduct() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.product = products.find((p) => p.id === id);
  }

  addToCart(product): void {
    this.cartService.addToCart(product);
    this.snackBar.open('Product added to cart!', 'Close', {
      duration: 3000, // Display for 3 seconds
      horizontalPosition: 'center', // Centered horizontally
      verticalPosition: 'top', // Displayed at the bottom
    });
  }
}
