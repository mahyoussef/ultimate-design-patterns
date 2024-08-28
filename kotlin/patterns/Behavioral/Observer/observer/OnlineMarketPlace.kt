package observer


data class OnlineMarketPlace (
    val subscribers: MutableMap<EventType, MutableList<Subscriber>> ?= mutableMapOf(),
    val products: MutableList<Product> ?= mutableListOf(),
    val offers: MutableList<Offer> ?= mutableListOf()
) {


    fun subscribe(eventType: EventType, subscriber: Subscriber) {
        subscribers?.computeIfAbsent(eventType){ mutableListOf() }?.add(subscriber)
    }

    fun unsubscribe(eventType: EventType, subscriber: Subscriber) {
        subscribers?.computeIfAbsent(eventType){ mutableListOf() }?.remove(subscriber)
    }

    fun addNewProduct(product: Product) {
        products?.add(product)
        notifySubscribers(EventType.NEW_PRODUCT, "New product is added: ${product.name}")
    }

    fun addNewOffer(offer: Offer) {
        offers?.add(offer)
        notifySubscribers(EventType.NEW_OFFER, "Adding a new offer: ${offer.message}")
    }

    fun addNewJobOpening(jobOpeningMessage: String) {
        notifySubscribers(EventType.JOB_OPENING, "New opening position is available: $jobOpeningMessage")
    }

    private fun notifySubscribers(eventType: EventType, message: String) {
        subscribers?.get(eventType)?.forEach { subscriber -> subscriber.notify(message) }
    }




}