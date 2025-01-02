from PricingStrategy import PricingStrategy

class Product:
    def __init__(self, name: str, price: float, pricing_strategy: PricingStrategy):
        self.name = name
        self.price = price
        self.pricing_strategy = pricing_strategy

    def calculate_price(self) -> float:
        return self.pricing_strategy.calculate_price(self.price)
