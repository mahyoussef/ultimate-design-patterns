package builder;

public class SlackNotificationBuilder implements NotificationBuilder {
    private String content;
    private String sender;
    private String recipient;
    private String timestamp;
    private boolean hasMarkdownLanguage;

    @Override
    public SlackNotificationBuilder setContent(String content) {
        this.content = content;
        return this;
    }

    @Override
    public SlackNotificationBuilder setSender(String sender) {
        this.sender = sender;
        return this;
    }

    @Override
    public SlackNotificationBuilder setRecipient(String recipient) {
        this.recipient = recipient;
        return this;
    }

    @Override
    public SlackNotificationBuilder setTimestamp(String timestamp) {
        this.timestamp = timestamp;
        return this;
    }

    public SlackNotificationBuilder setMarkdownLanguage(boolean hasMarkdownLanguage) {
        this.hasMarkdownLanguage = hasMarkdownLanguage;
        return this;
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

    public SlackNotification build() {
        return new SlackNotification(this);
    }
}
