namespace Builder;

public sealed class MessengerNotificationBuilder : INotificationBuilder
{
    public string? Content { get; private set; }
    public string? Sender { get; private set; }
    public string? Recipient { get; private set; }
    public string? Timestamp { get; private set; }
    public List<string>? Attachments { get; private set; }
    public string? Theme { get; private set; }

    public MessengerNotification Build()
        => new(this);

    public INotificationBuilder SetContent(string content)
    {
        Content = content;
        return this;
    }

    public INotificationBuilder SetSender(string sender)
    {
        Sender = sender;
        return this;
    }

    public INotificationBuilder SetRecipient(string recipient)
    {
        Recipient = recipient;
        return this;
    }

    public INotificationBuilder SetTimestamp(string timestamp)
    {
        Timestamp = timestamp;
        return this;
    }

    public INotificationBuilder SetAttachments(List<string> attachments)
    {
        Attachments = attachments;
        return this;
    }

    public INotificationBuilder SetTheme(string theme)
    {
        Theme = theme;
        return this;
    }
}
