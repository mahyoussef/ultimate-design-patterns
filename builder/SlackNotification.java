package builder;

public class SlackNotification {

    private String content;
    private String sender;
    private String recipient;
    private String timestamp;
    private boolean hasMarkdownLanguage;

    SlackNotification(SlackNotificationBuilder slackNotificationBuilder) {
        this.content = slackNotificationBuilder.getContent();
        this.sender = slackNotificationBuilder.getSender();
        this.recipient = slackNotificationBuilder.getRecipient();
        this.timestamp = slackNotificationBuilder.getTimestamp();
        this.hasMarkdownLanguage = slackNotificationBuilder.isHasMarkdownLanguage();
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

    public boolean isHasMarkdownLanguage() {
        return hasMarkdownLanguage;
    }
}
