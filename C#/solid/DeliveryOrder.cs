using System;

namespace Solid
{
    public class DeliveryOrder : Order, ShippingCostCalculator
    {
        private const double SHIPPING_COST = 10.0;

        public double CalculateShippingCost()
        {
            return Price + SHIPPING_COST;
        }
    }
}
