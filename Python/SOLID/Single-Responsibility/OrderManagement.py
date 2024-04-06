from Order import Order


class OrderManagement:
    def process_order(self, order : Order) -> None:
        print("Processing order: ", order.get_order_name(), "Now...")
