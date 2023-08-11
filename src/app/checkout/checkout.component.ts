import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent {
  constructor(private snackBar: MatSnackBar) {}
  fullName: string = '';
  address: string = '';
  city: string = '';
  state: string = '';
  zipCode: string = '';
  cardNumber: string = '';
  expiryDate: string = '';
  cvv: string = '';

  placeOrder() {
    if (this.validateForm()) {
      const itemsInCart = JSON.parse(localStorage.getItem('cartItems') || '[]');
      console.log('Form is valid. Order details:');
      console.log('Full Name:', this.fullName);
      console.log('Address:', this.address);
      console.log('City:', this.city);
      console.log('State:', this.state);
      console.log('Zip Code:', this.zipCode);
      console.log('Card Number:', this.cardNumber);
      console.log('Expiry Date:', this.expiryDate);
      console.log('CVV:', this.cvv);
      console.log('itemsInCart', itemsInCart);
      localStorage.removeItem('cartItems');
      setTimeout(() => {
        window.location.href = '/home';
      }, 2000);
      this.snackBar.open(
        'Payment successful! Thank you for your purchase.Your Order will be delivered within 3 Days',
        'Close',
        {
          duration: 3000, // Display for 3 seconds
          horizontalPosition: 'center', // Centered horizontally
          verticalPosition: 'top', // Displayed at the bottom
        }
      );
    } else {
      console.log('Form is invalid.');
    }
  }
  validateForm(): boolean {
    // Basic validation checks
    if (
      this.fullName.trim() === '' ||
      this.address.trim() === '' ||
      this.city.trim() === '' ||
      this.state.trim() === '' ||
      this.zipCode.trim() === '' ||
      this.cardNumber.trim() === '' ||
      this.expiryDate.trim() === '' ||
      this.cvv.trim() === ''
    ) {
      return false; // One or more fields are empty
    }

    return true; // All fields are filled
  }
}
