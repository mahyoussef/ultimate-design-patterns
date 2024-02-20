package builder;

import java.util.List;

public class MessengerNotification {

    private String content;
    private String sender;
    private String recipient;
    private String timestamp;
    private List<String> attachments;
    private String theme;

    MessengerNotification(MessengerNotificationBuilder messengerNotificationBuilder) {
        this.content = messengerNotificationBuilder.getContent();
        this.sender = messengerNotificationBuilder.getSender();
        this.recipient = messengerNotificationBuilder.getRecipient();
        this.timestamp = messengerNotificationBuilder.getTimestamp();
        this.attachments = messengerNotificationBuilder.getAttachments();
        this.theme = messengerNotificationBuilder.getTheme();
    }

    public String getContent() {
        return content;
    }

    public String getSender() {
        return sender;
    }

    public String getRecipient() {
        return recipient;
    }

    public String getTimestamp() {
        return timestamp;
    }

    public List<String> getAttachments() {
        return attachments;
    }

    public String getTheme() {
        return theme;
    }
}
