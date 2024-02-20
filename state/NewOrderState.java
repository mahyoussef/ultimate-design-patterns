package state;

public class NewOrderState implements OrderState {
    private final OrderManagement orderManagement;

    public NewOrderState(OrderManagement orderManagement) {
        this.orderManagement = orderManagement;
    }

    @Override
    public void processOrder() {
        System.out.println("Order: " + orderManagement.getOrder().getName() + " is being processing now...");
        orderManagement.changeState(new ProcessingOrderState(orderManagement));
    }

    @Override
    public void shipOrder() {
        System.out.println("Cannot ship the order: " + orderManagement.getOrder().getName()
                + " at the current state...");
    }

    @Override
    public void deliverOrder() {
        System.out.println("Cannot deliver the order: " + orderManagement.getOrder().getName()
                + " at the current state...");
    }

    @Override
    public void cancelOrder() {
        System.out.println("Cancelling order: " + orderManagement.getOrder().getName());
        orderManagement.changeState(new CancelledOrderState(orderManagement));
    }
}
