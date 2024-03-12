namespace Prototype;

public sealed class Brochure : MarketingMaterial
{
    public Brochure(string layout, string content, string color) : base(layout, content, color)
    {
    }

    public override MarketingMaterial CloneMarketingMaterial()
        => new Brochure(Layout, Content, Color);
}
