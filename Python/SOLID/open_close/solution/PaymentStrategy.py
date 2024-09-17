from abc import ABC, abstractmethod

class PaymentStrategy(ABC):
    @abstractmethod
    def processPayment(self, amount):
        pass

class MasterCardPaymentStrategy(PaymentStrategy):
    def processPayment(self, amount):
        print("Processing Master Card payments...")

class AmericanExpressPaymentStrategy(PaymentStrategy):
    def processPayment(self, amount):
        print("Processing American Express payments...")

class PaypalPaymentStrategy(PaymentStrategy):
    def processPayment(self, amount):
        print("Processing paypal payments...")
