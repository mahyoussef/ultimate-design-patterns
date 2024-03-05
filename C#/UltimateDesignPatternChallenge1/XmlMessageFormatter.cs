using dotnet.UltimateDesignPatternChallenge1.Interfaces;

namespace dotnet.UltimateDesignPatternChallenge1;

public class XmlMessageFormatter : IMessageFormatter
{
    public string Format(string message)
    {
        return $"<message>{message}</message>";
    }

    public string GetType()
    {
        return "XML";
    }
}