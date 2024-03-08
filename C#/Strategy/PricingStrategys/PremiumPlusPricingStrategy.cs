using Strategy.Interfaces;

namespace Strategy.PricingStrategys;

public sealed class PremiumPlusPricingStrategy : IPricingStrategy
{
    /// <summary>
    /// Premium Plus subscription price calculation, 30% discount
    /// </summary>
    /// <param name="price"><inheritdoc/></param>
    public decimal CalculatePrice(decimal price)
        => price - price * 0.3m;
}