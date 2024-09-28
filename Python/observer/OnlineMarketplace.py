from typing import List, Dict, Protocol

from Python.observer.EventType import EventType
from Python.observer.JobFinder import JobFinder
from Python.observer.Offer import Offer
from Python.observer.Product import Product
from Python.observer.Subscriber import Subscriber


class OnlineMarketplace:
    def __init__(self):
        self.subscribers:Dict[EventType, List[Subscriber]] = {
            EventType.NEW_PRODUCT: [],
            EventType.NEW_OFFER: [],
            EventType.JOB_OPENING: []
        }
        self.products: List[Product]= []
        self.offers: List[Offer] = []
        self.jobs: List[JobFinder] = []

    def add_new_product(self, product):
        self.products.append(product)
        self.notify_subscribers(EventType.NEW_PRODUCT, f"New product is added: {product.get_name()}")

    def add_new_offer(self, offer):
        self.offers.append(offer)
        self.notify_subscribers(EventType.NEW_OFFER, f"New product is added: {offer.get_name()}")

    def add_new_job_opening(self, job):
        self.jobs.append(job)
        self.notify_subscribers(EventType.JOB_OPENING, f"New opening position is available: {job.get_name()}")


    def subscribe(self, event_type, subscriber) -> None:
        self.subscribers[event_type].append(subscriber)

    def notify_subscribers(self, event_type, message: str) -> None:
        for subscriber in self.subscribers[event_type]:
            subscriber.notify(message)

    def unsubscribe(self, event_type, subscriber) -> None:
        self.subscribers[event_type].remove(subscriber)