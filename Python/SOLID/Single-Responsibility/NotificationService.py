from Customer import Customer


class NotificationService:
    def send_email_notification(self, customer : Customer, message : str) -> None:
        # send email notification
        print("Sending email notification to: ", customer.get_email(), " with Message: ", message)