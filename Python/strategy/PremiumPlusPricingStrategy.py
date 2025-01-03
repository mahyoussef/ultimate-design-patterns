from PricingStrategy import PricingStrategy

class PremiumPlusPricingStrategy(PricingStrategy):
    def __init__(self):
        self.discount = 0.3

    def calculate_price(self, price: float) -> float:
        return price * (1 - self.discount)
    