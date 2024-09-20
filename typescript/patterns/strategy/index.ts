import { BankTransferPaymentStrategy } from "./bank-transfer-payment-strategy";
import { Checkout } from "./checkout";
import { GoldPricingStrategy } from "./gold-pricing-strategy";
import { PaypalPaymentStrategy } from "./paypal-payment-strategy";
import { PremiumPricingStrategy } from "./premium-pricing-strategy";
import { Product } from "./product";
import { RegularPricingStrategy } from "./regular-pricing-strategy";
import { VisaCardPaymentStrategy } from "./visa-card-payment-strategy";

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
