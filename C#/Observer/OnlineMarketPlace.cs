using System.Diagnostics;
using dotnet.Observer.Enum;
using dotnet.Observer.Interfaces;
using dotnet.Observer.Models;

namespace dotnet.Observer;

public class OnlineMarketPlace
{
    private Dictionary<EventType, List<ISubscriber>> _subscribers = new Dictionary<EventType, List<ISubscriber>>();

    private List<Product> _products = new List<Product>();
    
    private List<Offer> _offers = new List<Offer>();
    
    private List<Job> _jobs = new List<Job>();
    
    public void Subscribe(EventType eventType, ISubscriber subscriber)
    {
        if (!_subscribers.ContainsKey(eventType))
        {
            _subscribers[eventType] = new List<ISubscriber>();
        }
        _subscribers[eventType].Add(subscriber);
    }
    
    public void AddNewProduct(Product product)
    {
        _products.Add(product);
        NotifySubscribers(EventType.NewProduct, "New product added " + product.Name + " at " + product.Price + " USD.");
    }
    
    public void AddNewOffer(Offer offer)
    {
        _offers.Add(offer);
        NotifySubscribers(EventType.NewOffer, "New offer added " + offer.Message);
    }
    
    public void AddNewJob(Job job)
    {
        _jobs.Add(job);
        NotifySubscribers(EventType.JobOpening, "New job opening added " + job.Title + " with salary " + job.Salary + " USD.");
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

