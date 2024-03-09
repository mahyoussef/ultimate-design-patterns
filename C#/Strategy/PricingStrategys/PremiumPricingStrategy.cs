using Strategy.Interfaces;

namespace Strategy.PricingStrategys;

public sealed class PremiumPricingStrategy : IPricingStrategy
{
    /// <summary>
    /// Premium pricing strategy, 20% discount
    /// </summary>
    /// <param name="price"><inheritdoc/></param>
    public decimal CalculatePrice(decimal price)
        => price - price * 0.2m;
}