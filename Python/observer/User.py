from Python.observer.Offer import Offer
from Python.observer.Product import Product

class User:
    def __init__(self, name: str, email:str, is_subscribed_to_products: bool, is_subscribed_to_offers: bool):
        self.email = email
        self.name = name
        self.is_subscribed_to_products = is_subscribed_to_products
        self.is_subscribed_to_offers = is_subscribed_to_offers

    def get_name(self) -> str:
        return self.name

    def get_email(self) -> str:
        return self.email


    def is_subscribed_to_offers(self) -> bool:
        return self.is_subscribed_to_offers

    def is_subscribed_to_products(self)-> bool:
        return self.is_subscribed_to_products


    def notify_product(self, product):
        if self.is_subscribed_to_products:
            print(f"Notifying {self.name} about new product: {product.get_name()}")

    def notify_offer(self, offer):
        if self.is_subscribed_to_offers:
            print(f"Notifying {self.name} about new offer: {offer.get_name()}")