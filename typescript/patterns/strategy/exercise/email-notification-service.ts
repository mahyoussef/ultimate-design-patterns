import type { NotificationSendingService } from "./notification-sending-service";
import type { User } from "./user";

export class EmailNotificationService implements NotificationSendingService {
  sendNotification(user: User, message: string): void {
    console.log(`Sending message: ${message} to user: ${user.getEmail()}`);
  }
}
