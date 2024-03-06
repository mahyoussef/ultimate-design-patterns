using System;

namespace Builder
{
    public class EmailNotification
    {
        private readonly string content;
        private readonly string timestamp;
        private readonly string sender;
        private readonly string recipient;

        private EmailNotification(EmailNotificationBuilder emailNotificationBuilder)
        {
            this.content = emailNotificationBuilder.Content;
            this.sender = emailNotificationBuilder.Sender;
            this.timestamp = emailNotificationBuilder.Timestamp;
            this.recipient = emailNotificationBuilder.Recipient;
        }

        public string Content => content;
        public string Timestamp => timestamp;
        public string Sender => sender;
        public string Recipient => recipient;

        public interface NotificationBuilder
        {
            EmailNotificationBuilder SetContent(string content);
            EmailNotificationBuilder SetSender(string sender);
            EmailNotificationBuilder SetRecipient(string recipient);
            EmailNotificationBuilder SetTimestamp(string timestamp);
        }

        public class EmailNotificationBuilder : NotificationBuilder
        {
            public string Content { get; private set; }
            public string Timestamp { get; private set; }
            public string Sender { get; private set; }
            public string Recipient { get; private set; }

            public EmailNotificationBuilder SetContent(string content)
            {
                this.Content = content;
                return this;
            }

            public EmailNotificationBuilder SetSender(string sender)
            {
                this.Sender = sender;
                return this;
            }

            public EmailNotificationBuilder SetRecipient(string recipient)
            {
                this.Recipient = recipient;
                return this;
            }

            public EmailNotificationBuilder SetTimestamp(string timestamp)
            {
                this.Timestamp = timestamp;
                return this;
            }

            public EmailNotification Build()
            {
                return new EmailNotification(this);
            }
        }
    }
}
