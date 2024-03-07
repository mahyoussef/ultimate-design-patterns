namespace Builder
{
    public interface NotificationBuilder
    {
        NotificationBuilder SetContent(string content);
        NotificationBuilder SetSender(string sender);
        NotificationBuilder SetRecipient(string recipient);
        NotificationBuilder SetTimestamp(string timestamp);
    }
}
