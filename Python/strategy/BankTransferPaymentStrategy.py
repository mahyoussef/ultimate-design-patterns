from PaymentStrategy import PaymentStrategy

class BankTransferPaymentStrategy(PaymentStrategy):
    def process_payment(self, amount: float) -> None:
        print(f"Processing payment of bank transfer...")
