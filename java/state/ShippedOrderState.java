package state;

public class ShippedOrderState implements OrderState {
    private final OrderManagement orderManagement;

    public ShippedOrderState(OrderManagement orderManagement) {
        this.orderManagement = orderManagement;
    }

    @Override
    public void processOrder() {
        System.out.println("Cannot process the order at the current state");
    }

    @Override
    public void shipOrder() {
        System.out.println("The order is currently being shipped!");
    }

    @Override
    public void deliverOrder() {
        System.out.println("Delivering order now...");
        orderManagement.changeState(new DeliveredOrderState(orderManagement));
    }

    @Override
    public void cancelOrder() {
        System.out.println("Cannot cancel the order at the current state");
    }
}
