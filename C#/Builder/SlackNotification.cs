namespace Builder;

public sealed class SlackNotification
{
    internal SlackNotification(SlackNotificationBuilder slackNotificationBuilder)
    {
        Content = slackNotificationBuilder.GetContent();
        Sender = slackNotificationBuilder.GetSender();
        Recipient = slackNotificationBuilder.GetRecipient();
        Timestamp = slackNotificationBuilder.GetTimestamp();
        HasMarkdownLanguage = slackNotificationBuilder.IsHasMarkdownLanguage();
    }

    public string Content { get; }
    public string Sender { get; }
    public string Recipient { get; }
    public string Timestamp { get; }
    public bool HasMarkdownLanguage { get; }
}

public class SlackNotificationBuilder
{
    private string _content;
    private string _sender;
    private string _recipient;
    private string _timestamp;
    private bool _hasMarkdownLanguage;

    public SlackNotificationBuilder SetContent(string content)
    {
        _content = content;
        return this;
    }

    public SlackNotificationBuilder SetSender(string sender)
    {
        _sender = sender;
        return this;
    }

    public SlackNotificationBuilder SetRecipient(string recipient)
    {
        _recipient = recipient;
        return this;
    }

    public SlackNotificationBuilder SetTimestamp(string timestamp)
    {
        _timestamp = timestamp;
        return this;
    }

    public SlackNotificationBuilder SetHasMarkdownLanguage(bool hasMarkdownLanguage)
    {
        _hasMarkdownLanguage = hasMarkdownLanguage;
        return this;
    }

    internal string GetContent() => _content;
    internal string GetSender() => _sender;
    internal string GetRecipient() => _recipient;
    internal string GetTimestamp() => _timestamp;
    internal bool IsHasMarkdownLanguage() => _hasMarkdownLanguage;

    public SlackNotification Build()
    {
        return new SlackNotification(this);
    }
}