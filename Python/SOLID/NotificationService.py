from Python.SOLID.customer import Customer


class NotificationService:
    def send_email_notification(self, customer: Customer, message: str):
        print(f"Sending email notification to: {customer.get_email()} with message: {message}")
