import type { PricingStrategy } from "./pricing-strategy";

export class GoldPricingStrategy implements PricingStrategy {
  calculatePrice(price: number): number {
    return price * 0.9; // 10% discount
  }
}
