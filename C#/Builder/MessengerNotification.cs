using System.Text.Json.Serialization;

namespace Builder;

public sealed class MessengerNotification
{
    internal MessengerNotification(MessengerNotificationBuilder messengerNotificationBuilder)
    {
        Content = messengerNotificationBuilder.Content;
        Sender = messengerNotificationBuilder.Sender;
        Recipient = messengerNotificationBuilder.Recipient;
        Timestamp = messengerNotificationBuilder.Timestamp;
        Attachments = messengerNotificationBuilder.Attachments;
        Theme = messengerNotificationBuilder.Theme;
    }

    public string? Content { get; }
    public string? Sender { get; }
    public string? Recipient { get; }
    public string? Timestamp { get; }
    public List<string>? Attachments { get; }
    public string? Theme { get; }
}

[JsonSerializable(typeof(MessengerNotification))]
public sealed partial class MessengerNotificationJsonContext : JsonSerializerContext;