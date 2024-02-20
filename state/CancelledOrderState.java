package state;

public class CancelledOrderState implements OrderState {
    private final OrderManagement orderManagement;

    public CancelledOrderState(OrderManagement orderManagement) {
        this.orderManagement = orderManagement;
    }

    @Override
    public void processOrder() {
        System.out.println("Cannot process the order at the current state...");
    }

    @Override
    public void shipOrder() {
        System.out.println("Cannot ship the order at the current state...");
    }

    @Override
    public void deliverOrder() {
        System.out.println("Cannot deliver the order at the current state...");
    }

    @Override
    public void cancelOrder() {
        System.out.println("Order is already cancelled!");
    }
}
