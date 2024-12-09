import {CartItem} from '../models/CartItem';

export class PriceCalculator {
  calculateTotal(items: CartItem[]): number {
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }
}
