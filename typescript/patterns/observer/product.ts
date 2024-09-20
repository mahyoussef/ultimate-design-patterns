export class Product {
  constructor(private name: string, private price: number) {}

  getName() {
    return this.name;
  }

  getPrice() {
    return this.price;
  }
}
