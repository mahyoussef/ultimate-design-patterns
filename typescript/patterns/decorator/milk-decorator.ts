class MilkDecorator extends CondimentDecorator implements Beverage {
  constructor(beverage: Beverage) {
    super(beverage);
  }
  prepare(): string {
    return super.prepare() + " and milk";
  }
}
