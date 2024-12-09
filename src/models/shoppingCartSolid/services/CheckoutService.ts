import {CheckoutInterface} from '../interfaces/CheckoutInterface';

export class Checkout implements CheckoutInterface {
  checkout(total: number): void {
    console.log(`Processing payment for total: ${total}`);
  }
}
