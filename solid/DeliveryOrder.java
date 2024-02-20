package solid;

public class DeliveryOrder extends Order implements ShippingCostCalculator {
    private static final double SHIPPING_COST = 10.0;

    @Override
    public double calculateShippingCost() {
        return price + SHIPPING_COST;
    }
}
