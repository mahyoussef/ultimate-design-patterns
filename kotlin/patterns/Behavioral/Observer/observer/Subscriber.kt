package observer

interface Subscriber {

    fun notify(message: String)
}