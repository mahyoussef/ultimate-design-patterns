namespace Prototype;

public abstract class MarketingMaterial : ICloneable
{
    public string Layout { get; set; }
    public string Content { get; set; }
    public string Color { get; set; }

    protected MarketingMaterial(string layout, string content, string color)
    {
        Layout = layout;
        Content = content;
        Color = color;
    }

    /// <summary>
    /// Prints the values of its properties.
    /// </summary>
    public void Print()
    {
        Console.WriteLine("Marketing Material Configuration:");
        Console.WriteLine($"Layout: {Layout}");
        Console.WriteLine($"Content: {Content}");
        Console.WriteLine($"Color: {Color}");
        Console.WriteLine("Printing now ...");
        Console.WriteLine();
    }

    public abstract MarketingMaterial CloneMarketingMaterial();

    public virtual object Clone()
    {
        // TODO: copy mutable state here, so the clone can't change the internals of the original
        return (MarketingMaterial)MemberwiseClone();
    }
}
