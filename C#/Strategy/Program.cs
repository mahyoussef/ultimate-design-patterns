using Strategy;
using Strategy.PaymentStrategys;
using Strategy.PricingStrategys;

// Bank Processing demo
Checkout newCheckout = new(new BankTransferPaymentStrategy());
newCheckout.ProcessPayment(100);

newCheckout = new(new PaypalPaymentStrategy());
newCheckout.ProcessPayment(200);

newCheckout = new(new VisaCardPaymentStrategy());
newCheckout.ProcessPayment(300);

Console.WriteLine("-------------------------------------------------------");

// Product Pricing demo
Product newProduct = new("Product 1", 100, new RegularPricingStrategy());
Console.WriteLine($"{newProduct.Name}: Price before: {newProduct.Price}, Price After: {newProduct.CalculatePrice()}");

newProduct = new("Product 1", 100, new GoldPricingStrategy());
Console.WriteLine($"{newProduct.Name}: Price before: {newProduct.Price}, Price After: {newProduct.CalculatePrice()}");

newProduct = new("Product 1", 100, new PremiumPricingStrategy());
Console.WriteLine($"{newProduct.Name}: Price before: {newProduct.Price}, Price After: {newProduct.CalculatePrice()}");

newProduct = new("Product 1", 100, new PremiumPlusPricingStrategy());
Console.WriteLine($"{newProduct.Name}: Price before: {newProduct.Price}, Price After: {newProduct.CalculatePrice()}");
