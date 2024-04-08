package solid

interface SubscriptionNotificationService {
    fun subscribeToNewProductsAvailability()
    fun subscribeToSMSNotification()
}