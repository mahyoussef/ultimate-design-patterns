
from Python.observer.Subscriber import Subscriber


class Customer(Subscriber):
    def __init__(self, name: str, email: str):
        self.email = email
        self.name = name


    def get_name(self) -> str:
        return self.name

    def get_email(self) -> str:
        return self.email


    def notify(self, message):
            print(f"Notifying {self.name} about {message}")
