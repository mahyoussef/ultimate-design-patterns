namespace Observer.Quiz.Models;

public sealed class WeeklyNewsLetter
{
    public string Title { get; set; } = string.Empty;
    
    public string Content { get; set; } = string.Empty;
    
    public DateTime PublishedAt { get; set; } = DateTime.Now;
}