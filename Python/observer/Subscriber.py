from abc import ABC, abstractmethod


class Subscriber(ABC):
    @abstractmethod
    def notify(self, item_to_notify_about)->None:
        pass

