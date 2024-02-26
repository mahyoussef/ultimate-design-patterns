interface NotificationSendingService {
  sendNotification(user: User, message: string): void;
}

class NotificationService {
  constructor(
    private readonly notificationSendingService: NotificationSendingService
  ) {}

  sendNotification(user: User, message: string): void {
    this.notificationSendingService.sendNotification(user, message);
  }
}

class EmailNotificationService implements NotificationSendingService {
  sendNotification(user: User, message: string): void {
    console.log(`Sending message: ${message} to user: ${user.getEmail()}`);
  }
}

class SMSNotificationService implements NotificationSendingService {
  sendNotification(user: User, message: string): void {
    console.log(`Sending message: ${message} to user: ${user.getMobile()}`);
  }
}

class User {
  constructor(private readonly email: string, private mobile: string) {}

  getEmail() {
    return this.email;
  }

  getMobile() {
    return this.mobile;
  }
}

// example usage
const ahmed = new User("ahmed@example.com", "0123456789");

const emailNotification = new NotificationService(
  new EmailNotificationService()
);
emailNotification.sendNotification(ahmed, "hello");

const smsNotification = new NotificationService(new SMSNotificationService());
smsNotification.sendNotification(ahmed, "hello");
