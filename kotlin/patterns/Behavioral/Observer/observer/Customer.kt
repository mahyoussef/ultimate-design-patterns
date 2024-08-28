package observer

data class Customer(
    var name: String ?= null
): Subscriber {

    override fun notify(message: String) {
        println("Notifying user: $name about $message ")
    }


}