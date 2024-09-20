import { Customer } from "./Customer";

class NotificationService {
    sendEmailNotification(customer: Customer, message: string): void {
    console.log("Sending email notification to: " + customer.getEmail()
                + " with message: " + message);
    }
}