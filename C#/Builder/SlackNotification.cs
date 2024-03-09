using System.Text.Json.Serialization;

namespace Builder;

public sealed class SlackNotification
{
    internal SlackNotification(SlackNotificationBuilder slackNotificationBuilder)
    {
        Content = slackNotificationBuilder.Content;
        Sender = slackNotificationBuilder.Sender;
        Recipient = slackNotificationBuilder.Recipient;
        Timestamp = slackNotificationBuilder.Timestamp;
        HasMarkdownLanguage = slackNotificationBuilder.HasMarkdownLanguage;
    }

    public string? Content { get; }
    public string? Sender { get; }
    public string? Recipient { get; }
    public string? Timestamp { get; }
    public bool HasMarkdownLanguage { get; }
}

[JsonSerializable(typeof(SlackNotification))]
public sealed partial class SlackNotificationJsonContext : JsonSerializerContext;