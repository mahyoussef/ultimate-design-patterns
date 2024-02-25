import { EmailNotificationService } from "./email-notification-service";
import { NotificationService } from "./notification-service";
import { SMSNotificationService } from "./sms-notification-service";
import { User } from "./user";

const ahmed = new User("ahmed@example.com", "0123456789");

const emailNotification = new NotificationService(
  new EmailNotificationService()
);
emailNotification.sendNotification(ahmed, "hello");

const smsNotification = new NotificationService(new SMSNotificationService());
smsNotification.sendNotification(ahmed, "hello");
