from Python.SOLID.OrderManagement import Order
from Python.SOLID.PaymentStrategy import PaymentStrategy


class Payment:
    def __init__(self, payment_type):
        self.payment_type = payment_type

    def get_type(self):
        return self.payment_type


class PaymentProcessor:
    def __init__(self, payStrategy: PaymentStrategy):
        self.payStrategy = payStrategy

    def process_payment(self, order: Order):
        print(f"Processing payment for order: {order.get_name()}")
        print(f"Issuing payment for amount: {order.get_price()}")

        self.payStrategy.processPayment(order.get_price())
