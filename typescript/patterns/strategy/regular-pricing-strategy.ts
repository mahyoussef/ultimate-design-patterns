import type { PricingStrategy } from "./pricing-strategy";

export class RegularPricingStrategy implements PricingStrategy {
  calculatePrice(price: number): number {
    return price;
  }
}
