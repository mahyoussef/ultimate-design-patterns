from abc import ABC, abstractmethod


class SubscriberManagement(ABC):

    @abstractmethod
    def subscribe_to_new_products_availability(self, user):
        pass

    @abstractmethod
    def subscribe_to_sms_notifications(self, user):
        pass
