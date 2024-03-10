namespace SOLID;

public class Order
{
    protected string? _name;
    protected double _price;

    public string? Name { get => _name; set => _name = value; }
    public double Price { get => _price; set => _price = value; }
}
