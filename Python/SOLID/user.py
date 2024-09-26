from Python.SOLID.SubscriberManagement import SubscriberManagement
from Python.SOLID.UserManagement import UserManagement


class User(UserManagement, SubscriberManagement):
    def __init__(self, name: str, email:str):
        self.email = email
        self.name = name


    def set_email(self, email: str) -> None:
        self.email = email

    def set_name(self, name: str) -> None:
        self.name = name

    def get_name(self) -> str:
        return self.name

    def get_email(self) -> str:
        return self.email


    # Implementing the abstract methods
    def update_user_profile(self, user)-> None:
        print(f"Updating user's profile for {user.get_name()}.")

    def change_password(self, user, new_password)-> None:
        print(f"Changing password for {user.get_name()} to {new_password}.")

    def subscribe_to_new_products_availability(self, user)-> None:
        print(f"Subscribing {user.get_name()} to new products availability.")

    def subscribe_to_sms_notifications(self, user)-> None:
        print(f"Subscribing {user.get_name()} to SMS notifications.")
