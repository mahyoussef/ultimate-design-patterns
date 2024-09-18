from Python.SOLID.user import User


class NotificationService:
    def send_email_notification(self, user: User, message: str):
        print(f"Sending email notification to: {user.get_email()} with message: {message}")
