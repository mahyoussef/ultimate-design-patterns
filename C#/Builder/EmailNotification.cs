using System;

namespace Builder
{
    public class EmailNotification
    {
        private EmailNotification(EmailNotificationBuilder emailNotificationBuilder)
        {
            Content = emailNotificationBuilder.Content;
            Sender = emailNotificationBuilder.Sender;
            Timestamp = emailNotificationBuilder.Timestamp;
            Recipient = emailNotificationBuilder.Recipient;
        }

        public string Content { get; }
        public string Timestamp { get; }
        public string Sender { get; }
        public string Recipient { get; }

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
                Content = content;
                return this;
            }

            public EmailNotificationBuilder SetSender(string sender)
            {
                Sender = sender;
                return this;
            }

            public EmailNotificationBuilder SetRecipient(string recipient)
            {
                Recipient = recipient;
                return this;
            }

            public EmailNotificationBuilder SetTimestamp(string timestamp)
            {
                Timestamp = timestamp;
                return this;
            }

            public EmailNotification Build()
            {
                return new EmailNotification(this);
            }
        }
    }
}
