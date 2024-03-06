namespace dotnet.UltimateDesignPatternChallenge1.Interfaces;

public interface IMessageFormatter
{
    public string Format(string message);

    public string GetType();
}