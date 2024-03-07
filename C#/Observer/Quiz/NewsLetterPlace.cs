using dotnet.Observer.Quiz.Enum;
using dotnet.Observer.Quiz.Interfaces;
using dotnet.Observer.Quiz.Models;

public class NewsLetterPlace
{
    private Dictionary<EventType, List<ISubscriber>> _subscribers = new();
    
    private List<BlogPost> _blogPosts = new();
    
    private List<WeeklyNewsLetter> _weeklyNewsLetters = new();
    
    public void Subscribe(EventType eventType, ISubscriber subscriber)
    {
        if (_subscribers.ContainsKey(eventType))
        {
            _subscribers[eventType].Add(subscriber);
        }
        else
        {
            _subscribers.Add(eventType, new List<ISubscriber> {subscriber});
        }
    }
    
    public void AddNewBlogPost(BlogPost blogPost)
    {
        _blogPosts.Add(blogPost);
        NotifySubscribers(EventType.NewBlogPost, "New blog post added " + blogPost.Title + " at " + blogPost.PublishedAt + ".");
    }
    
    public void AddNewWeeklyNewsletter(WeeklyNewsLetter weeklyNewsLetter)
    {
        _weeklyNewsLetters.Add(weeklyNewsLetter);
        NotifySubscribers(EventType.NewWeeklyNewsletter, "New weekly newsletter added " + weeklyNewsLetter.Title + " at " + weeklyNewsLetter.PublishedAt + ".");
    }
    
    private void NotifySubscribers(EventType eventType, string message)
    {
        if (_subscribers.ContainsKey(eventType))
        {
            _subscribers[eventType].ForEach(subscriber => subscriber.Notify(message));
        }
    }
    
    public void RemoveSubscriber(EventType eventType, ISubscriber subscriber)
    {
        if (_subscribers.ContainsKey(eventType))
        {
            _subscribers[eventType].Remove(subscriber);
        }
    }
}