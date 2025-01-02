from PaymentStrategy import PaymentStrategy

class VisaCardPaymentStrategy(PaymentStrategy):
    def process_payment(self, amount: float) -> None:
        print(f"Processing payment of visa card...")
        print(f"calculating fees of the amount {amount} for the visa card")
