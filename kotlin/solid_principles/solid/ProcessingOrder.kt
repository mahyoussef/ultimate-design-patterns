package solid

class ProcessingOrder(order: Order) {
    fun processingOrder(order: Order){
        println("processing order ${order.name}")
    }
}