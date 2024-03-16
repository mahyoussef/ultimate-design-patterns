namespace Composite.Exercise;

public sealed class Product : IShoppingItem
{
    private readonly string _name;
    private readonly double _price;

    public Product(string name, double price)
    {
        _name = name;
        _price = price;
    }

    public double CalculateTotal() => _price;
}
