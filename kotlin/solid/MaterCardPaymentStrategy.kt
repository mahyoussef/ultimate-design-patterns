package solid

class MaterCardPaymentStrategy : ProcessPaymentStrategy {
    override fun processPayment() {
        println("Processing Master Card payments...")
    }
}