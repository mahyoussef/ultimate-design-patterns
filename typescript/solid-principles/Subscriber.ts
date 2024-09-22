import { SubscriptionNotificationService } from "./subscription-notification-service";

export class Subscriber implements SubscriptionNotificationService{

    private email: string;
    
    subscribeToNewProductsAvailability(): void {
        console.log("Subscribing to new products availability...");
    }

    subscribeToSMSNotifications(): void {
        console.log("Subscribing to SMS notifications...");
    }

    
}