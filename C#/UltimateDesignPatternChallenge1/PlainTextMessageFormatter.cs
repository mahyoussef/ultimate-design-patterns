using dotnet.UltimateDesignPatternChallenge1.Interfaces;

namespace dotnet.UltimateDesignPatternChallenge1;

public class PlainTextMessageFormatter : IMessageFormatter
{
    public string Format(string message)
    {
        return message;
    }

    public new string GetType()
    {
        return "PLAIN_TEXT";
    }
}