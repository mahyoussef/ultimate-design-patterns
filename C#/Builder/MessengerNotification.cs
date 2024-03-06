using System.Collections.Generic;

namespace Builder
{
    public class MessengerNotification
    {
        private string content;
        private string sender;
        private string recipient;
        private string timestamp;
        private List<string> attachments;
        private string theme;

        internal MessengerNotification(MessengerNotificationBuilder messengerNotificationBuilder)
        {
            this.content = messengerNotificationBuilder.GetContent();
            this.sender = messengerNotificationBuilder.GetSender();
            this.recipient = messengerNotificationBuilder.GetRecipient();
            this.timestamp = messengerNotificationBuilder.GetTimestamp();
            this.attachments = messengerNotificationBuilder.GetAttachments();
            this.theme = messengerNotificationBuilder.GetTheme();
        }

        public string Content => content;
        public string Sender => sender;
        public string Recipient => recipient;
        public string Timestamp => timestamp;
        public List<string> Attachments => attachments;
        public string Theme => theme;

        public class MessengerNotificationBuilder
        {
            private string content;
            private string sender;
            private string recipient;
            private string timestamp;
            private List<string> attachments;
            private string theme;

            public MessengerNotificationBuilder SetContent(string content)
            {
                this.content = content;
                return this;
            }

            public MessengerNotificationBuilder SetSender(string sender)
            {
                this.sender = sender;
                return this;
            }

            public MessengerNotificationBuilder SetRecipient(string recipient)
            {
                this.recipient = recipient;
                return this;
            }

            public MessengerNotificationBuilder SetTimestamp(string timestamp)
            {
                this.timestamp = timestamp;
                return this;
            }

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

            public MessengerNotification Build()
            {
                return new MessengerNotification(this);
            }

            internal string GetContent() => content;
            internal string GetSender() => sender;
            internal string GetRecipient() => recipient;
            internal string GetTimestamp() => timestamp;
            internal List<string> GetAttachments() => attachments;
            internal string GetTheme() => theme;
        }
    }
}
