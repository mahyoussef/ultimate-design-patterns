namespace SOLID;

public sealed class DeliveryOrder : Order, IShippingCostCalculator
{
    private const double SHIPPING_COST = 10.0;

    public double CalculateShippingCost()
        => _price + SHIPPING_COST;
}
