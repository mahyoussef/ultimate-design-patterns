package solid

class VisaPaymentStrategy : ProcessPaymentStrategy {
    override fun processPayment() {
        println("Processing VISA payments...")
    }
}