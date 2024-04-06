from Order import Order
from Payment import Payment
from Customer import Customer


class OrderManager:
    def process_order(self, order : Order) -> None:
        print("Processing order: ", order.get_order_name(), "Now...")

    def process_payment(self, order : Order, payment : Payment) -> None:
        # process payment
        print("Processing payment for order: ", order.get_order_name())
        print("Issuing payment for amount: ", order.get_order_price())

        # check payment type
        if payment.get_type() == "VISA":
            print("Processing VISA Card payment")
        elif payment.get_type() == "MASTERCARD":
            print("Processing MASTERCARD payment")
        elif payment.get_type() == "PAYPAL":
            print("Processing PAYPAL payment")
        else:
            print("Invalid payment type")


    def send_email_notification(self, customer : Customer, message : str) -> None:
        # send email notification
        print("Sending email notification to: ", customer.get_email(), " with Message: ", message)

# the OrderManager class is responsible for processing orders, payments and sending email notifications
# OrderManager class is vaiolating the Single Responsibility Principle because it has more than one reason to change
# let's refactor this class to follow the Single Responsibility Principle
        
# Refactored OrderManager class
# we will create 3 separate classes for each responsibility
# 1. OrderProcessor class
# 2. PaymentProcessor class
# 3. EmailNotification class