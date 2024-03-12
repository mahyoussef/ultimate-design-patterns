namespace Prototype;

public sealed class Flyer : MarketingMaterial
{
    public Flyer(string layout, string content, string color) : base(layout, content, color)
    {
    }

    public override MarketingMaterial CloneMarketingMaterial()
        => new Flyer(Layout, Content, Color);
}
