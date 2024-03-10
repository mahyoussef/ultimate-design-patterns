using Observer.Quiz.Enum;
using Observer.Quiz.Interfaces;
using Observer.Quiz.Models;

namespace Observer.Quiz;

public sealed class NewsLetterPlace
{
    private readonly Dictionary<EventType, List<ISubscriber>> _subscribers = [];
    
    private readonly List<BlogPost> _blogPosts = [];
    
    private readonly List<WeeklyNewsLetter> _weeklyNewsLetters = [];
    
    public void Subscribe(EventType eventType, ISubscriber subscriber)
    {
        if (_subscribers.TryGetValue(eventType, out List<ISubscriber>? value))
        {
            value.Add(subscriber);
        }
        else
        {
            _subscribers.Add(eventType, [subscriber]);
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
        if (_subscribers.TryGetValue(eventType, out List<ISubscriber>? value))
        {
            value.ForEach(subscriber => subscriber.Notify(message));
        }
    }
    
    public void RemoveSubscriber(EventType eventType, ISubscriber subscriber)
    {
        if (_subscribers.TryGetValue(eventType, out List<ISubscriber>? value))
        {
            value.Remove(subscriber);
        }
    }
}