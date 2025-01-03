from PricingStrategy import PricingStrategy

class GoldPricingStrategy(PricingStrategy):
    def __init__(self):
        self.discount = 0.1

    def calculate_price(self, price: float) -> float:
        return price * (1 - self.discount)
