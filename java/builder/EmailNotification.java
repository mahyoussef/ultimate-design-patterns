package builder;

public class EmailNotification {

    private final String content;
    private final String timestamp;
    private final String sender;
    private final String recipient;

    private EmailNotification(EmailNotificationBuilder emailNotificationBuilder) {
        this.content = emailNotificationBuilder.getContent();
        this.sender = emailNotificationBuilder.getSender();
        this.timestamp = emailNotificationBuilder.getTimestamp();
        this.recipient = emailNotificationBuilder.getRecipient();
    }

    public String getContent() {
        return content;
    }

    public String getTimestamp() {
        return timestamp;
    }

    public String getSender() {
        return sender;
    }

    public String getRecipient() {
        return recipient;
    }

    public static class EmailNotificationBuilder implements NotificationBuilder {
        private String content;
        private String timestamp;
        private String sender;
        private String recipient;

        @Override
        public EmailNotificationBuilder setContent(String content) {
            this.content = content;
            return this;
        }

        @Override
        public EmailNotificationBuilder setSender(String sender) {
            this.sender = sender;
            return this;
        }

        @Override
        public EmailNotificationBuilder setRecipient(String recipient) {
            this.recipient = recipient;
            return this;
        }

        @Override
        public EmailNotificationBuilder setTimestamp(String timestamp) {
            this.timestamp = timestamp;
            return this;
        }

        public EmailNotification build() {
            return new EmailNotification(this);
        }

        public String getContent() {
            return content;
        }

        public String getTimestamp() {
            return timestamp;
        }

        public String getSender() {
            return sender;
        }

        public String getRecipient() {
            return recipient;
        }
    }
}
