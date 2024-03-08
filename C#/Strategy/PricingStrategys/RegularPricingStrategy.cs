using Strategy.Interfaces;

namespace Strategy.PricingStrategys;

public class RegularPricingStrategy : IPricingStrategy
{
    /// <summary>
    /// Regular pricing strategy, no discounts
    /// </summary>
    /// <param name="price"><inheritdoc/></param>
    public decimal CalculatePrice(decimal price) => price;
}