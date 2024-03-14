namespace Composite.Exercise;

public sealed class Bundle : IShoppingItem
{
    private readonly List<IShoppingItem> _items;

    public Bundle()
        => _items = [];

    public void AddItem(IShoppingItem item)
        => _items.Add(item);

    public double CalculateTotal()
    {
        // Apply bundle discount logic if needed
        return _items.Sum(item => item.CalculateTotal()) * 0.9f;  // 10% discount for bundles
    }
}
