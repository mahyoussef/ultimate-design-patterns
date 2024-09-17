from PaymentStrategy import *
from Python.SOLID.single_res.solution.order import Order

class PaymentProcessor:
    def __init__(self, payStrategy: PaymentStrategy):
        self.payStrategy = payStrategy

    def process_payment(self, order: Order):
        print(f"Processing payment for order: {order.get_name()}")
        print(f"Issuing payment for amount: {order.get_price()}")

        self.payStrategy.processPayment(order.get_price())

# Create products
if __name__ == "__main__":
    # Create products (orders)
    electronics_product = Order("Electronics", 100)
    clothing_product = Order("Clothing", 50)
    books_product = Order("Books", 30)

    # Choose the strategy
    mastercard_strategy = MasterCardPaymentStrategy()
    americanexpress_strategy = AmericanExpressPaymentStrategy()
    paypal_strategy = PaypalPaymentStrategy()

    # Create a payment processor and process payments
    processor = PaymentProcessor(mastercard_strategy)
    processor.process_payment(electronics_product)

    processor = PaymentProcessor(americanexpress_strategy)
    processor.process_payment(clothing_product)

    processor = PaymentProcessor(paypal_strategy)
    processor.process_payment(books_product)