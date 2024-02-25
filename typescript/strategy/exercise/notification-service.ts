import type { NotificationSendingService } from "./notification-sending-service";
import type { User } from "./user";

export class NotificationService {
  constructor(
    private readonly notificationSendingService: NotificationSendingService
  ) {}

  sendNotification(user: User, message: string): void {
    this.notificationSendingService.sendNotification(user, message);
  }
}
