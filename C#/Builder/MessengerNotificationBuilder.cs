using System.Collections.Generic;

namespace Builder
{
    public class MessengerNotificationBuilder : NotificationBuilder
    {
        private string content;
        private string sender;
        private string recipient;
        private string timestamp;
        private List<string> attachments;
        private string theme;

        public MessengerNotificationBuilder SetAttachments(List<string> attachments)
        {
            this.attachments = attachments;
            return this;
        }

        public MessengerNotificationBuilder SetTheme(string theme)
        {
            this.theme = theme;
            return this;
        }

        public override MessengerNotificationBuilder SetContent(string content)
        {
            this.content = content;
            return this;
        }

        public override MessengerNotificationBuilder SetSender(string sender)
        {
            this.sender = sender;
            return this;
        }

        public override MessengerNotificationBuilder SetRecipient(string recipient)
        {
            this.recipient = recipient;
            return this;
        }

        public override MessengerNotificationBuilder SetTimestamp(string timestamp)
        {
            this.timestamp = timestamp;
            return this;
        }

        internal string GetContent() => content;
        internal string GetSender() => sender;
        internal string GetRecipient() => recipient;
        internal string GetTimestamp() => timestamp;
        internal List<string> GetAttachments() => attachments;
        internal string GetTheme() => theme;

        public MessengerNotification Build()
        {
            return new MessengerNotification(this);
        }
    }
}
