namespace Builder;

/// <summary>
/// The <see cref="INotificationBuilder" /> interface specifies methods for creating
/// the different parts of the Notification objects.
/// </summary>
public interface INotificationBuilder
{
    INotificationBuilder SetContent(string content);
    INotificationBuilder SetSender(string sender);
    INotificationBuilder SetRecipient(string recipient);
    INotificationBuilder SetTimestamp(string timestamp);
}
