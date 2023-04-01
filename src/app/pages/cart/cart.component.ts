import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  cart: Cart = {
    items: [
      {
        product: 'https://via.placeholder.com/150',
        name: 'snickers',
        id: 1,
        price: 150,
        quantity: 4,
      },
      {
        product: 'https://via.placeholder.com/150',
        name: 'snickers',
        id: 2,
        price: 150,
        quantity: 4,
      },
      {
        product: 'https://via.placeholder.com/150',
        name: 'snickers',
        id: 3,
        price: 150,
        quantity: 4,
      },
      {
        product: 'https://via.placeholder.com/150',
        name: 'snickers',
        id: 4,
        price: 150,
        quantity: 4,
      },
      {
        product: 'https://via.placeholder.com/150',
        name: 'snickers',
        id: 5,
        price: 150,
        quantity: 4,
      },
    ],
  };
  dataSource: Array<CartItem> = [];
  displayedColumns: Array<string> = [
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action',
  ];

  ngOnInit(): void {
    this.cartService.cart.subscribe((_cart: Cart) => {
      this.cart = _cart;
      this.dataSource = this.cart.items;
    });
  }

  constructor(private cartService: CartService, private http: HttpClient) {}

  getTotal(items: Array<CartItem>): number {
    return this.cartService.getTotal(items);
  }

  onClearCart(): void {
    this.cartService.clearCart();
  }
  onRemoveFromCart(item: CartItem): void {
    this.cartService.removeFromCart(item);
  }
  onAddQuantity(item: CartItem): void {
    this.cartService.addToCart(item);
  }
  onRemoveQuantity(item: CartItem): void {
    this.cartService.removeQuantity(item);
  }
  onCheckout(): void {
    this.http
      .post('http://localhost:4242/checkout', {
        items: this.cart.items,
      })
      .subscribe(async (res: any) => {
        let stripe = await loadStripe(
          'pk_test_51MfqC5SCiA7VSPdIlL0aFjoZ85rVxfL3WJfH3DD4CoaVfWVIUaYPURZh4MvxhB4h4mTgyO0N85PRa3fh75mySoxj00Amm2LSZ9'
        );
        stripe?.redirectToCheckout({
          sessionId: res.id,
        });
      });
  }
}
