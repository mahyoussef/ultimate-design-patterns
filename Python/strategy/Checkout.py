from PaymentStrategy import PaymentStrategy
class Checkout:
    def __init__(self, payment_strategy: PaymentStrategy):
        self.payment_strategy = payment_strategy

    def process_payment(self, amount: float) -> None:
        self.payment_strategy.process_payment(amount)


