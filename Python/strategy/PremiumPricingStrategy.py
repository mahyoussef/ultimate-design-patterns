from PricingStrategy import PricingStrategy

class PremiumPricingStrategy(PricingStrategy):
    def __init__(self):
        self.discount = 0.2

    def calculate_price(self, price: float) -> float:
        return price * (1 - self.discount)

