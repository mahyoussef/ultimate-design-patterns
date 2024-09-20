class MintDecorator extends CondimentDecorator implements Beverage {
  prepare() {
    return super.prepare() + " and mint";
  }
}
