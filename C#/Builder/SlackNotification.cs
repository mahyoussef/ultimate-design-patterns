namespace Builder
{
    public class SlackNotification
    {
        private string content;
        private string sender;
        private string recipient;
        private string timestamp;
        private bool hasMarkdownLanguage;

        internal SlackNotification(SlackNotificationBuilder slackNotificationBuilder)
        {
            this.content = slackNotificationBuilder.GetContent();
            this.sender = slackNotificationBuilder.GetSender();
            this.recipient = slackNotificationBuilder.GetRecipient();
            this.timestamp = slackNotificationBuilder.GetTimestamp();
            this.hasMarkdownLanguage = slackNotificationBuilder.IsHasMarkdownLanguage();
        }

        public string Content => content;
        public string Sender => sender;
        public string Recipient => recipient;
        public string Timestamp => timestamp;
        public bool HasMarkdownLanguage => hasMarkdownLanguage;

        public class SlackNotificationBuilder
        {
            private string content;
            private string sender;
            private string recipient;
            private string timestamp;
            private bool hasMarkdownLanguage;

            public SlackNotificationBuilder SetContent(string content)
            {
                this.content = content;
                return this;
            }

            public SlackNotificationBuilder SetSender(string sender)
            {
                this.sender = sender;
                return this;
            }

            public SlackNotificationBuilder SetRecipient(string recipient)
            {
                this.recipient = recipient;
                return this;
            }

            public SlackNotificationBuilder SetTimestamp(string timestamp)
            {
                this.timestamp = timestamp;
                return this;
            }

            public SlackNotificationBuilder SetHasMarkdownLanguage(bool hasMarkdownLanguage)
            {
                this.hasMarkdownLanguage = hasMarkdownLanguage;
                return this;
            }

            internal string GetContent() => content;
            internal string GetSender() => sender;
            internal string GetRecipient() => recipient;
            internal string GetTimestamp() => timestamp;
            internal bool IsHasMarkdownLanguage() => hasMarkdownLanguage;

            public SlackNotification Build()
            {
                return new SlackNotification(this);
            }
        }
    }
}
