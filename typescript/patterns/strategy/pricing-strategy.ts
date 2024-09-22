export interface PricingStrategy {
  calculatePrice(price: number): number;
}
