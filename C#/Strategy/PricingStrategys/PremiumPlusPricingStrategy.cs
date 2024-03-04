using dotnet.Strategy.Interfaces;

namespace dotnet.Strategy.PricingStrategys;

public class PremiumPlusPricingStrategy : IPricingStrategy
{
    public decimal CalculatePrice(decimal price)
    {
        return price - price * 0.3m;
    }
}