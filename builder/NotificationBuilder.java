package builder;

public interface NotificationBuilder {

    NotificationBuilder setContent(String content);
    NotificationBuilder setSender(String sender);
    NotificationBuilder setRecipient(String recipient);
    NotificationBuilder setTimestamp(String timestamp);
}
