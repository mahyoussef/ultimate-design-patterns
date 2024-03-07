using dotnet.UltimateDesignPatternChallenge1.Interfaces;

namespace dotnet.UltimateDesignPatternChallenge1;

public class JsonMessageFormatter : IMessageFormatter
{
    public string Format(string message)
    {
        return $"{{\"message\": \"{message}\"}}";
    }

    public string GetType()
    {
        return "JSON";
    }
}