namespace Prototype;

public sealed class Poster : MarketingMaterial
{
    public Poster(string layout, string content, string color) : base(layout, content, color)
    {
    }

    public override MarketingMaterial CloneMarketingMaterial()
        => new Poster(Layout, Content, Color);
}