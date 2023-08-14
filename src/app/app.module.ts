import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ProductsComponent } from './products/products.component';
import { MatCardModule } from '@angular/material/card';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { MatListModule } from '@angular/material/list';
import { CartService } from './cart.service';
import { CheckoutComponent } from './checkout/checkout.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatBadgeModule } from '@angular/material/badge';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { LoginComponent } from './login/login.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AuthModule } from '@auth0/auth0-angular';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    HomeComponent,
    ProductDetailsComponent,
    CartComponent,
    CheckoutComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatFormFieldModule,
    MatGridListModule,
    FormsModule,
    MatInputModule,
    MatPaginatorModule,
    MatBadgeModule,
    MatSnackBarModule,
    AuthModule.forRoot({
      domain: 'dev-itutlm5aikkf4b3d.us.auth0.com',
      clientId: 'VtDbphClQHGe7Tie1oKSK6HtRM1Wl08S',
      authorizationParams: {
        redirect_uri: 'http://localhost:4200/home',
      },
    }),
  ],
  providers: [CartService],
  bootstrap: [AppComponent],
})
export class AppModule {}
