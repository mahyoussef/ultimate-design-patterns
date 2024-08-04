package observer

data class JobFinder(
    val name : String = ""
): Subscriber {


    override fun notify(message: String) {
        println("Notifying $name about new job alert, $message")
    }
}