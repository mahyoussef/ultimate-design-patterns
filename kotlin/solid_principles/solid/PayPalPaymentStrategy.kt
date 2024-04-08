package solid

class PayPalPaymentStrategy : ProcessPaymentStrategy {
    override fun processPayment() {
        println("Processing Paypal payments...")
    }
}