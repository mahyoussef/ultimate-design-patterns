class SugarDecorator extends CondimentDecorator implements Beverage {
  prepare(): string {
    return super.prepare() + " and sugar";
  }
}
