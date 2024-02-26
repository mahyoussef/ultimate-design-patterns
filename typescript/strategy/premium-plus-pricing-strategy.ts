import type { PricingStrategy } from "./pricing-strategy";

export class PremiumPlusPricingStrategy implements PricingStrategy {
  calculatePrice(price: number): number {
    return price * 0.7; // 30% discount
  }
}
