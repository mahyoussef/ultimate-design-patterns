package solid

class MasterCardPaymentStrategy : ProcessPaymentStrategy {
    override fun processPayment() {
        println("Processing Master Card payments...")
    }
}