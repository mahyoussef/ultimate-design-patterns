//namespace Builder;

//public class SlackNotification
//{
//    private string content;
//    private string sender;
//    private string recipient;
//    private string timestamp;
//    private bool hasMarkdownLanguage;

//    internal SlackNotification(SlackNotificationBuilder slackNotificationBuilder)
//    {
//        content = slackNotificationBuilder.GetContent();
//        sender = slackNotificationBuilder.GetSender();
//        recipient = slackNotificationBuilder.GetRecipient();
//        timestamp = slackNotificationBuilder.GetTimestamp();
//        hasMarkdownLanguage = slackNotificationBuilder.IsHasMarkdownLanguage();
//    }

//    public string Content => content;
//    public string Sender => sender;
//    public string Recipient => recipient;
//    public string Timestamp => timestamp;
//    public bool HasMarkdownLanguage => hasMarkdownLanguage;
//}

//public class SlackNotificationBuilder : INotificationBuilder
//{
//    private string content;
//    private string sender;
//    private string recipient;
//    private string timestamp;
//    private bool hasMarkdownLanguage;

//    public SlackNotificationBuilder SetContent(string content)
//    {
//        content = content;
//        return this;
//    }

//    public SlackNotificationBuilder SetSender(string sender)
//    {
//        sender = sender;
//        return this;
//    }

//    public SlackNotificationBuilder SetRecipient(string recipient)
//    {
//        recipient = recipient;
//        return this;
//    }

//    public SlackNotificationBuilder SetTimestamp(string timestamp)
//    {
//        timestamp = timestamp;
//        return this;
//    }

//    public SlackNotificationBuilder SetMarkdownLanguage(bool hasMarkdownLanguage)
//    {
//        hasMarkdownLanguage = hasMarkdownLanguage;
//        return this;
//    }

//    internal string GetContent() => content;
//    internal string GetSender() => sender;
//    internal string GetRecipient() => recipient;
//    internal string GetTimestamp() => timestamp;
//    internal bool IsHasMarkdownLanguage() => hasMarkdownLanguage;

//    public SlackNotification Build()
//    {
//        return new SlackNotification(this);
//    }
//}
