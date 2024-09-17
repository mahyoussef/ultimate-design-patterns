class Order:
    def __init__(self, name, price):
        self.name = name
        self.price = price

    def get_name(self):
        return self.name

    def get_price(self):
        return self.price


class Payment:
    def __init__(self, payment_type):
        self.payment_type = payment_type

    def get_type(self):
        return self.payment_type


class Customer:
    def __init__(self, email):
        self.email = email

    def get_email(self):
        return self.email


class OrderManager:
    def process_order(self, order: Order):
        print(f"Processing order: {order.get_name()} now...")

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

    def send_email_notification(self, customer: Customer, message: str):
        print(f"Sending email notification to: {customer.get_email()} with message: {message}")


# Example usage
order = Order(name="Laptop", price=1200.50)
payment = Payment(payment_type="VISA")
customer = Customer(email="customer@example.com")

manager = OrderManager()
manager.process_order(order)
manager.process_payment(order, payment)
manager.send_email_notification(customer, "Your order has been processed.")
