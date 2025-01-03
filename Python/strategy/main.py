from Product import Product
from RegularPricingStrategy import RegularPricingStrategy
from GoldPricingStrategy import GoldPricingStrategy
from PremiumPricingStrategy import PremiumPricingStrategy
from Checkout import Checkout
from VisaCardPaymentStrategy import VisaCardPaymentStrategy
from BankTransferPaymentStrategy import BankTransferPaymentStrategy
from PayPalPaymentStrategy import PayPalPaymentStrategy

# initialize products
wallet = Product("Wallet", 200, RegularPricingStrategy())
wallet_price = wallet.calculate_price()
print(f"The price of the wallet is {wallet_price}")

jacket = Product("Jacket", 100, GoldPricingStrategy())
jacket_price = jacket.calculate_price()
print(f"The price of the jacket is {jacket_price}")

mobile = Product("Mobile", 1000, PremiumPricingStrategy())
mobile_price = mobile.calculate_price()
print(f"The price of the mobile is {mobile_price}")

# initialize checkout
wallet_checkout = Checkout(VisaCardPaymentStrategy())
jacket_checkout = Checkout(PayPalPaymentStrategy())
mobile_checkout = Checkout(BankTransferPaymentStrategy())

# process payment
wallet_checkout.process_payment(wallet_price)
jacket_checkout.process_payment(jacket_price)
mobile_checkout.process_payment(mobile_price)
