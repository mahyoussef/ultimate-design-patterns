namespace Builder;

public sealed class SlackNotificationBuilder
{
    public string? Content { get; private set; }
    public string? Sender{ get; private set; }
    public string? Recipient { get; private set; }
    public string? Timestamp { get; private set; }
    public bool HasMarkdownLanguage { get; private set; }

    public SlackNotificationBuilder SetContent(string content)
    {
        Content = content;
        return this;
    }

    public SlackNotificationBuilder SetSender(string sender)
    {
        Sender = sender;
        return this;
    }

    public SlackNotificationBuilder SetRecipient(string recipient)
    {
        Recipient = recipient;
        return this;
    }

    public SlackNotificationBuilder SetTimestamp(string timestamp)
    {
        Timestamp = timestamp;
        return this;
    }

    public SlackNotificationBuilder SetHasMarkdownLanguage(bool hasMarkdownLanguage)
    {
        HasMarkdownLanguage = hasMarkdownLanguage;
        return this;
    }

    public SlackNotification Build()
        => new(this);
}
