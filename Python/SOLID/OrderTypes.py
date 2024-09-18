from abc import ABC, abstractmethod
from Python.SOLID.OrderManagement import Order


class ShippingCostCalculator(ABC):
    @abstractmethod
    def calculate_shipping_cost(self):
        pass


class PickupOrder(Order, ShippingCostCalculator):
    def calculate_shipping_cost(self):
        # No shipping cost for pickup orders
        return self.get_price()


class DeliveryOrder(Order, ShippingCostCalculator):
    shipping_Cost = 50.0

    def calculate_shipping_cost(self):
        return self.get_price() + self.shipping_Cost


