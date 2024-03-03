using dotnet.Strategy.Interfaces;

namespace dotnet.Strategy.PricingStrategys;

public class PremiumPricingStrategy : IPricingStrategy
{
    public decimal CalculatePrice(decimal price)
    {
        return price - price * 0.2m;
    }
}