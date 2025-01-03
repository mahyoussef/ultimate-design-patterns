from PaymentStrategy import PaymentStrategy

class PayPalPaymentStrategy(PaymentStrategy):
    def process_payment(self, amount: float) -> None:
        print(f"Processing payment of paypal...")
        print(f"calculating fees of the amount {amount} for the paypal")
