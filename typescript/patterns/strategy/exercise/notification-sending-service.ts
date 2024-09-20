import type { User } from "./user";

export interface NotificationSendingService {
  sendNotification(user: User, message: string): void;
}
