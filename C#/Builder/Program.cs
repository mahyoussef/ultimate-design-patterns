using System.Text.Json;

using Builder;

MessengerNotificationBuilder builder = new();

builder.SetContent("Hello!")
    .SetSender("John Doe")
    .SetRecipient("Jane Doe")
    .SetTimestamp("2021-01-01 12:00:00");

// For setting additional properties not included in the INotificationBuilder interface
builder.SetTheme("Light");
builder.SetAttachments(["attachment1", "attachment2"]);

MessengerNotification messengerNotification = builder.Build();
Console.WriteLine(JsonSerializer.Serialize(messengerNotification, MessengerNotificationJsonContext.Default.MessengerNotification));

Console.WriteLine();

SlackNotificationBuilder slackBuilder = new();

slackBuilder.SetSender("John Doe")
    .SetRecipient("Jane Doe")
    .SetTimestamp("2021-01-01 12:00:00")
    .SetContent("Hello from Jane Doe!")
    .SetHasMarkdownLanguage(false);

SlackNotification slackNotification = slackBuilder.Build();
Console.WriteLine(JsonSerializer.Serialize(slackNotification, SlackNotificationJsonContext.Default.SlackNotification));

Console.WriteLine();

EmailNotification.EmailNotificationBuilder emailBuilder = new();

emailBuilder.SetSender("John Doe")
    .SetRecipient("Jane Doe")
    .SetTimestamp("2021-01-01 12:00:00")
    .SetContent("Hello from John Doe!");

EmailNotification emailNotification = emailBuilder.Build();
Console.WriteLine(JsonSerializer.Serialize(emailNotification));
