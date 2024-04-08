import solid.PayPalPaymentStrategy
import solid.PaymentManager
import solid.ProcessingPayment

fun main (){
    ProcessingPayment(PayPalPaymentStrategy()).processingPayment()
}
