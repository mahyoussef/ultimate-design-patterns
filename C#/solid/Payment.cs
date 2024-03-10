namespace SOLID;

public sealed class Payment
{
    public string Type { get; }

    public Payment(string type)
    {
        Type = type;
    }
}
