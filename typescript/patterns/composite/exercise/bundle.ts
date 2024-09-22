import { ShoppingItem } from "./shopping-item";

export class Bundle implements ShoppingItem {
  private items: ShoppingItem[];

  constructor() {
    this.items = [];
  }

  addItem(item: ShoppingItem): void {
    this.items.push(item);
  }

  calculateTotal(): number {
    let total = 0;
    this.items.forEach((item) => {
      total += item.calculateTotal();
    });
    // Apply bundle discount logic if needed
    return total * 0.9; // 10% discount for bundles
  }
}
