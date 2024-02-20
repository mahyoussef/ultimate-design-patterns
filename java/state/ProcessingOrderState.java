package state;

public class ProcessingOrderState implements OrderState {
    private final OrderManagement orderManagement;

    public ProcessingOrderState(OrderManagement orderManagement) {
        this.orderManagement = orderManagement;
    }

    @Override
    public void processOrder() {
        System.out.println("The order is currently being processed!");
    }

    @Override
    public void shipOrder() {
        System.out.println("Shipping the order...");
        orderManagement.changeState(new ShippedOrderState(orderManagement));
    }

    @Override
    public void deliverOrder() {
        System.out.println("The order cannot be delivered at the current state");
    }

    @Override
    public void cancelOrder() {
        System.out.println("The order is being cancelled now...");
        orderManagement.changeState(new CancelledOrderState(orderManagement));
    }
}
