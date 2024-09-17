from order import Order


class OrderManagement:

    def process_order(self, order: Order):
        print(f"Processing order: {order.get_name()} now...")
