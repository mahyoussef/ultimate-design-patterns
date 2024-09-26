from Python.observer.OnlineMarketplace import OnlineMarketplace
from Python.observer.Offer import Offer
from Python.observer.Product import Product
from Python.observer.User import User


# Initialize the marketplace
marketplace = OnlineMarketplace()

# Create users
user1 = User("Heba", "heba@example.com", True, True)
user2 = User("Ali", "Ali@example.com", False, False)
user3 = User("Hashim", "Hashim@example.com", True, False)
user4 = User("Ahmed", "Ahmed@example.com", False, True)

# Add users to marketplace
marketplace.add_user(user1)
marketplace.add_user(user2)
marketplace.add_user(user3)
marketplace.add_user(user4)

# Add products/offers and notify users
product = Product("Phone", 4637)
offer = Offer("50% Discount")

marketplace.add_new_product(product)
marketplace.add_new_offer(offer)
