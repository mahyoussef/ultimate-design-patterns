package state;

public class DeliveredOrderState implements OrderState {
    private final OrderManagement orderManagement;

    public DeliveredOrderState(OrderManagement orderManagement) {
        this.orderManagement = orderManagement;
    }

    @Override
    public void processOrder() {
        System.out.println("Order cannot be processed because it's already delivered");
    }

    @Override
    public void shipOrder() {
        System.out.println("Order cannot be shipped because it's already delivered");
    }

    @Override
    public void deliverOrder() {
        System.out.println("Order is already delivered!");
    }

    @Override
    public void cancelOrder() {
        System.out.println("Order cannot be cancelled because it's already delivered");
    }
}
