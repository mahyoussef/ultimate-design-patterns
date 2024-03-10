using SOLID;

DeliveryOrder order = new() { Name = "Laptop", Price = 1000 };

PaymentProcessor paymentProcessor = new(new AmericanExpressPaymentStrategy());
paymentProcessor.ProcessPayment(order);

paymentProcessor = new(new MasterCardPaymentStrategy());
paymentProcessor.ProcessPayment(order);

// TODO: Add demo code for SOLID Principles
