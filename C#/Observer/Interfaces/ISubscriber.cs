namespace Observer.Interfaces;

public interface ISubscriber
{
    /// <summary>
    /// Notify all subscribers with a message
    /// </summary>
    /// <param name="message">Message to be sent to subscribers</param>
    void Notify(string message);
}