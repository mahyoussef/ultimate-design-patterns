using Strategy.Interfaces;

namespace Strategy.PricingStrategys;

public sealed class GoldPricingStrategy : IPricingStrategy
{
    /// <summary>
    /// Gold subscription price calculation, 10% discount
    /// </summary>
    /// <param name="price"><inheritdoc/></param>
    public decimal CalculatePrice(decimal price)
        => price - price * 0.1m;
}