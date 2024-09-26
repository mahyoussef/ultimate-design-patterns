from Python.observer.Offer import Offer
from Python.observer.Product import Product
from Python.observer.User import User

class OnlineMarketplace:
    def __init__(self):
        self.users = []
        self.products = []
        self.offers = []

    def add_user(self, user):
        self.users.append(user)

    def add_new_product(self, product):
        self.products.append(product)
        self.notify_users_about_product(product)

    def notify_users_about_product(self, product):
        for user in self.users:
            user.notify_product(product)

    def add_new_offer(self, offer):
        self.offers.append(offer)
        self.notify_users_about_offer(offer)

    def notify_users_about_offer(self, offer):
        for user in self.users:
            user.notify_offer(offer)
