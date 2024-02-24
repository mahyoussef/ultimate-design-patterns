import { Subscriber } from "./subscriber";

export class ShippingCompany implements Subscriber {
  constructor(private name: string) {}

  getName() {
    return this.name;
  }

  notify(message: string) {
    console.log(`${this.name} is receiving a notification about: ${message}`);
  }
}
