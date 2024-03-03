namespace dotnet.Observer.Interfaces;

public interface ISubscriber
{
    public void Notify(string message);
}