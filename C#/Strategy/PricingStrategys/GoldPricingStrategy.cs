using dotnet.Strategy.Interfaces;

namespace dotnet.Strategy.PricingStrategys;

public class GoldPricingStrategy : IPricingStrategy
{
    public decimal CalculatePrice(decimal price)
    {
        return price - price * 0.1m;
    }
}