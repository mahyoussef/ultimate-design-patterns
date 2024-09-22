import { ShoppingItem } from "./shopping-item";

export class Product implements ShoppingItem {
  private name: string;
  private price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  calculateTotal(): number {
    return this.price;
  }
}
