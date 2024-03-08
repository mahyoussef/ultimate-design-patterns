using Strategy.Interfaces;

namespace Strategy;

public sealed class Product
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

    /// <summary>
    /// Calculate product price based on <see cref="IPricingStrategy"/> provided
    /// </summary>
    /// <returns>Price after being calculated based on subscription</returns>
    public decimal CalculatePrice()
        => _pricingStrategy.CalculatePrice(Price);
}