from Payment import Payment


class PaymentProcessor:
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

