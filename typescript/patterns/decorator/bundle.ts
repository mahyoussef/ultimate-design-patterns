interface Beverage {
  prepare(): string;
}

// ############################

class Tea implements Beverage {
  prepare(): string {
    return "Tea with tea leaves";
  }
}

class Coffee implements Beverage {
  prepare(): string {
    return "Coffee with coffee beans";
  }
}

// ############################

class CondimentDecorator implements Beverage {
  private beverage: Beverage;

  constructor(beverage: Beverage) {
    this.beverage = beverage;
  }

  prepare(): string {
    return this.beverage.prepare();
  }
}

// ############################

class MilkDecorator extends CondimentDecorator implements Beverage {
  constructor(beverage: Beverage) {
    super(beverage);
  }
  prepare(): string {
    return super.prepare() + " and milk";
  }
}

class SugarDecorator extends CondimentDecorator implements Beverage {
  prepare(): string {
    return super.prepare() + " and sugar";
  }
}

class MintDecorator extends CondimentDecorator implements Beverage {
  prepare() {
    return super.prepare() + " and mint";
  }
}

// Example usage

// drinks
const coffee = new Coffee();

// decorators
const sugar = new SugarDecorator(coffee);
const milk = new MilkDecorator(sugar);

const order = milk.prepare();
console.log(order);
