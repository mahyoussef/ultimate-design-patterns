package solid

class Subscriber : SubscriptionNotificationService {
    private var email : String?= null

    override fun subscribeToNewProductsAvailability() {
        println("Subscribing to new products availability...")
    }

    override fun subscribeToSMSNotification() {
        println("Subscribing to SMS notification...")
    }
}