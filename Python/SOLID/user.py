from Python.SOLID.SubscriberManagement import SubscriberManagement
from Python.SOLID.UserManagement import UserManagement


class User(UserManagement, SubscriberManagement):
    def __init__(self, email, name):
        self.email = email
        self.name = name

    def get_email(self):
        return self.email

    def get_name(self):
        return self.name

    # Implementing the abstract methods
    def update_user_profile(self, user):
        print(f"Updating user's profile for {user.get_name()}.")

    def change_password(self, user, new_password):
        print(f"Changing password for {user.get_name()} to {new_password}.")

    def subscribe_to_new_products_availability(self, user):
        print(f"Subscribing {user.get_name()} to new products availability.")

    def subscribe_to_sms_notifications(self, user):
        print(f"Subscribing {user.get_name()} to SMS notifications.")
