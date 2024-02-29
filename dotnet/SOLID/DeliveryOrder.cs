using dotnet.SOLID.Interface;
using dotnet.SOLID.Models;

namespace dotnet.SOLID;

public class DeliveryOrder : Order , IShippingCostCalculator
{
    private const decimal SHIPPING_COST = 10;

    public decimal CalculateShippingCost()
    {
        return Price + SHIPPING_COST;
    }
} 