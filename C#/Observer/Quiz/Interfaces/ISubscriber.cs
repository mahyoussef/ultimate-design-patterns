namespace Observer.Quiz.Interfaces;

public interface ISubscriber
{
    public void Notify(string message);
}