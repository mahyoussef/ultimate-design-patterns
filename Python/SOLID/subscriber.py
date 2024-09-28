from Python.SOLID.SubscriberManagement import SubscriberManagement


class Subscriber(SubscriberManagement):
    def __init__(self, email):
        self.email = email

    def get_email(self):
        return self.email

    def subscribe_to_new_products_availability(self, user):
        print(f"Subscribing {user.get_email()} to new products availability.")

    def subscribe_to_sms_notifications(self, user):
        print(f"Subscribing {user.get_email()} to SMS notifications.")
