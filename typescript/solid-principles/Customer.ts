import { SubscriptionNotificationService } from "./subscription-notification-service";
import { UserManagement } from "./user-management";

export class Customer implements UserManagement, SubscriptionNotificationService  {
    private name: string;
    private email: string;

    constructor(name: string, email: string){
        this.name = name;
        this.email = email;
    }

    getName(): string {
        return this.name;
    }

    getEmail(): string {
        return this.email;
    }

    subscribeToNewProductsAvailability(): void {
        throw new Error("Method not implemented.");
    }

    subscribeToSMSNotifications(): void {
        throw new Error("Method not implemented.");
    }

    updateUserProfile(customer: Customer): void {
        console.log("Updating user profile + " + customer.getName() + "...");
    }

    changePassword(customer: Customer, newPassword: string) {
        console.log("Updating user: " + customer.getName() + "...");
    }


}