from Python.SOLID.OrderTypes import PickupOrder, DeliveryOrder
from Python.SOLID.subscriber import Subscriber
from Python.SOLID.user import User

print("#============================================= Liskov Substitution Principle (LSP)")
pickup_order = PickupOrder("dress",100.0)
print("Pickup Order Cost:", pickup_order.calculate_shipping_cost())

delivery_order = DeliveryOrder("dress",100.0)
print("Delivery Order Cost:", delivery_order.calculate_shipping_cost())


print("#============================================= Interface Segregation (ISP)")
user = User("john.doe@example.com", "John Doe")
user.update_user_profile(user)
user.change_password(user, "newPassword123")
user.subscribe_to_new_products_availability(user)

print("\n")

subscriber = Subscriber("hebaallah.hashim68@gmail.com")
subscriber.subscribe_to_new_products_availability(subscriber)
subscriber.subscribe_to_sms_notifications(subscriber)

