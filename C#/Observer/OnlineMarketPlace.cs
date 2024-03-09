using System.Runtime.InteropServices;

using Observer.Enum;
using Observer.Interfaces;
using Observer.Models;

namespace Observer;

public sealed class OnlineMarketPlace
{
    private readonly Dictionary<EventType, List<ISubscriber>> _subscribers = [];

    private readonly List<Product> _products = [];

    private readonly List<Offer> _offers = [];

    private readonly List<Job> _jobs = [];

    /// <summary>
    /// Subscribe to a specific event type.
    /// </summary>
    /// <param name="eventType">The event type the subsciber wants to listen to</param>
    /// <param name="subscriber">The identity that subscribes to certain events</param>
    public void Subscribe(EventType eventType, ISubscriber subscriber)
    {
        if (!_subscribers.TryGetValue(eventType, out List<ISubscriber>? value))
        {
            value = [];
            _subscribers[eventType] = value;
        }

        value.Add(subscriber);
    }

    /// <summary>
    /// Adds a new product to marketplace and notifies the subscribers.
    /// </summary>
    /// <param name="product">The <see cref="Product"/> object</param>
    public void AddNewProduct(Product product)
    {
        _products.Add(product);
        NotifySubscribers(EventType.NewProduct, $"New product added {product.Name} at {product.Price} USD.");
    }

    /// <summary>
    /// Adds a new offer to marketplace and notifies the subscribers.
    /// </summary>
    /// <param name="offer">The <see cref="Offer"/> object</param>
    public void AddNewOffer(Offer offer)
    {
        _offers.Add(offer);
        NotifySubscribers(EventType.NewOffer, $"New offer added {offer.Message}");
    }

    /// <summary>
    /// Adds a new job to marketplace and notifies the subscribers.
    /// </summary>
    /// <param name="job">The <see cref="Job"/> object</param>
    public void AddNewJob(Job job)
    {
        _jobs.Add(job);
        NotifySubscribers(EventType.JobOpening, $"New job opening added {job.Title} with salary {job.Salary} USD.");
    }

    /// <summary>
    /// Loops on all subscribers and notify them with the message.
    /// 
    /// Looping is boosted using <see cref="CollectionsMarshal.AsSpan{T}(List{T}?)"/>
    /// For more info, check <see href="https://youtu.be/jUZ3VKFyB-A?si=uCdr2K7iRCFV42VH">this link</see>
    /// </summary>
    /// <param name="eventType">The triggered event type</param>
    /// <param name="message">The message to be sent to subscribers</param>
    private void NotifySubscribers(EventType eventType, string message)
    {
        if (_subscribers.TryGetValue(eventType, out List<ISubscriber>? value))
        {
            foreach (var subscriber in CollectionsMarshal.AsSpan(value))
            {
                subscriber.Notify(message);
            }
        }
    }

    /// <summary>
    /// Removes a subscriber from listening to a specific event type.
    /// </summary>
    /// <param name="eventType">The event type</param>
    /// <param name="subscriber">The subscriber to be removed</param>
    public void RemoveSubscriber(EventType eventType, ISubscriber subscriber)
    {
        if (_subscribers.TryGetValue(eventType, out List<ISubscriber>? value))
        {
            value.Remove(subscriber);
        }
    }
}

