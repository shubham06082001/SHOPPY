export interface CartItem {
  product: string;
  name: string;
  id: number;
  price: number;
  quantity: number;
}

export interface Cart{
    items: Array<CartItem>
}