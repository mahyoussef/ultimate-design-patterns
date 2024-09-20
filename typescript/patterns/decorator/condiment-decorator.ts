class CondimentDecorator implements Beverage {
  private beverage: Beverage;

  constructor(beverage: Beverage) {
    this.beverage = beverage;
  }

  prepare(): string {
    return this.beverage.prepare();
  }
}
