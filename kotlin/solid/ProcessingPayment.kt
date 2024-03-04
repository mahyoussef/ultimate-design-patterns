package solid

class ProcessingPayment(private val strategy: ProcessPaymentStrategy) {
    fun processingPayment(){
        strategy.processPayment()
    }
}