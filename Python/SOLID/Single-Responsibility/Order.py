class Order:
    def __init__(self, order_name, order_price):
        self.order_name = order_name
        self.order_price = order_price

    def get_order_name(self):
        return self.order_name

    def get_order_price(self):
        return self.order_price

    def __str__(self):
        return f"Order name: {self.order_name}, Order Total: {self.order_price}"