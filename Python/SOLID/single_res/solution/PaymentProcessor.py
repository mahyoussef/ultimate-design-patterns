from order import Order
from payment import Payment


class PaymentProcessor:
    def process_payment(self, order: Order, payment: Payment):
        print(f"Processing payment of order {order.get_name()}")
        print(f"Issuing payment for amount {order.get_price()}")

        payment_type = payment.get_type()
        if payment_type == 'VISA':
            print("Processing VISA card payments...")
        elif payment_type == 'Master_Card':
            print("Processing MasterCard payments...")
        elif payment_type == 'American_Express':
            print("Processing American Express card payments...")
        else:
            raise Exception(f"Unsupported payment type: {payment_type}")
