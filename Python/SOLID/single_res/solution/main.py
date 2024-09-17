from order import Order
from payment import Payment
from customer import Customer
from OrderManagement import OrderManagement
from PaymentProcessor import PaymentProcessor
from NotificationService import NotificationService

# Example usage
order = Order(name="Laptop", price=1200.50)
payment = Payment(payment_type="VISA")
customer = Customer(email="customer@example.com")

order_processor = OrderManagement()
payment_processor = PaymentProcessor()
email_notification = NotificationService()

order_processor.process_order(order)
payment_processor.process_payment(order, payment)
email_notification.send_email_notification(customer, "Your order has been processed.")
