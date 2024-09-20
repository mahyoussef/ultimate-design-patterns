type MembershipType = "REGULAR" | "GOLD" | "PREMIUM";

type PaymentMethod = "VISA_CARD" | "PAYPAL" | "BANK_TRANSFER";

interface PricingStrategy {
  calculatePrice(price: number): number;
}

interface PaymentStrategy {
  processPayment(price: number): void;
}

class Product {
  constructor(
    private name: string,
    private price: number,
    private readonly pricingStrategy: PricingStrategy
  ) {}

  calculatePrice(): number {
    return this.pricingStrategy.calculatePrice(this.price);
  }

  getName(): string {
    return this.name;
  }

  setName(name: string) {
    this.name = name;
  }

  getPrice(): number {
    return this.price;
  }

  setPrice(price: number) {
    this.price = price;
  }
}

class RegularPricingStrategy implements PricingStrategy {
  calculatePrice(price: number): number {
    return price;
  }
}

class GoldPricingStrategy implements PricingStrategy {
  calculatePrice(price: number): number {
    return price * 0.9; // 10% discount
  }
}

class PremiumPricingStrategy implements PricingStrategy {
  calculatePrice(price: number): number {
    return price * 0.8; // 20% discount
  }
}

class PremiumPlusPricingStrategy implements PricingStrategy {
  calculatePrice(price: number): number {
    return price * 0.7; // 30% discount
  }
}

class VisaCardPaymentStrategy implements PaymentStrategy {
  processPayment(amount: number): void {
    console.log("Processing payment of visa cards...");
    console.log(`Calculating fees of the amount ${amount} for visa cards...`);
  }
}

class PaypalPaymentStrategy implements PaymentStrategy {
  processPayment(amount: number): void {
    console.log("Processing payment of paypal...");
    console.log(`Calculating fees of the amount ${amount} for paypal...`);
  }
}

class BankTransferPaymentStrategy implements PaymentStrategy {
  processPayment(amount: number): void {
    console.log("Processing payment of bank transfer...");
  }
}

class Checkout {
  constructor(private readonly paymentStrategy: PaymentStrategy) {}

  processPayment(amount: number): void {
    this.paymentStrategy.processPayment(amount);
  }
}

// example usage
const wallet = new Product("Wallet", 200, new RegularPricingStrategy());
const walletPrice = wallet.calculatePrice();
console.log(walletPrice);

const jacket = new Product("Jacket", 100, new GoldPricingStrategy());
const jacketPrice = jacket.calculatePrice();
console.log(jacketPrice);

const mobile = new Product("Mobile", 1000, new PremiumPricingStrategy());
const mobilePrice = mobile.calculatePrice();
console.log(mobilePrice);

const visaCardCheckout = new Checkout(new VisaCardPaymentStrategy());
visaCardCheckout.processPayment(walletPrice);

const paypalCheckout = new Checkout(new PaypalPaymentStrategy());
paypalCheckout.processPayment(jacketPrice);

const bankTransferCheckout = new Checkout(new BankTransferPaymentStrategy());
bankTransferCheckout.processPayment(mobilePrice);
