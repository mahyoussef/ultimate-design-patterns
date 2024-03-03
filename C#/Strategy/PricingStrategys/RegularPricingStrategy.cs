using dotnet.Strategy.Interfaces;

namespace dotnet.Strategy.PricingStrategys;

public class RegularPricingStrategy : IPricingStrategy
{
    public decimal CalculatePrice(decimal price)
    {
        return price;
    }
}