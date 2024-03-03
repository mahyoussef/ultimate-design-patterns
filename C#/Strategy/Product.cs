using dotnet.Strategy.Interfaces;

namespace dotnet.Strategy;

public class Product
{
    public string Name { get; set; }
    public decimal Price { get; set; }
    
    private readonly IPricingStrategy _pricingStrategy;

    public Product(string name, decimal price, IPricingStrategy pricingStrategy)
    {
        Name = name;
        Price = price;
        _pricingStrategy = pricingStrategy;
    }

    public decimal CalculatePrice()
    {
        return _pricingStrategy.CalculatePrice(Price);
    }
}