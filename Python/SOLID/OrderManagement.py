class Order:
    def __init__(self, name, price):
        self.name = name
        self.price = price

    def get_name(self):
        return self.name

    def get_price(self):
        return self.price

class OrderManagement:
    def process_order(self, order: Order):
        print(f"Processing order: {order.get_name()} now...")
