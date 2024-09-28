from Python.observer.EventType import EventType
from Python.observer.JobFinder import JobFinder
from Python.observer.OnlineMarketplace import OnlineMarketplace
from Python.observer.Offer import Offer
from Python.observer.Product import Product
from Python.observer.Customer import Customer


# Initialize the marketplace
marketplace = OnlineMarketplace()

# Create users
user1 = Customer("Heba", "heba@example.com")
marketplace.subscribe(EventType.NEW_PRODUCT, user1)

user2 = Customer("Ali", "Ali@example.com")
marketplace.subscribe(EventType.NEW_OFFER, user2)
marketplace.subscribe(EventType.NEW_PRODUCT, user2)

user3 = Customer("Hashim", "Hashim@example.com")
marketplace.subscribe(EventType.JOB_OPENING, user3)


# Add products/offers and notify users
product = Product("Phone", 4637)
offer = Offer("50% Discount")
job = JobFinder("salesman")

marketplace.add_new_product(product)
marketplace.add_new_offer(offer)
marketplace.add_new_job_opening(job)
