from Python.SOLID.OrderTypes import PickupOrder, DeliveryOrder



#============================================= Liskov Substitution Principle (LSP)
pickup_order = PickupOrder("dress",100.0)
print("Pickup Order Cost:", pickup_order.calculate_shipping_cost())

delivery_order = DeliveryOrder("dress",100.0)
print("Delivery Order Cost:", delivery_order.calculate_shipping_cost())