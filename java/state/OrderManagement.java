package state;

public class OrderManagement {

    private Order order;
    private OrderState orderState;

    public OrderManagement(Order order) {
        this.order = order;
        this.orderState = new NewOrderState(this);
    }

    public void changeState(OrderState changedOrderState) {
        orderState = changedOrderState;
    }

    public void processOrder() {
        orderState.processOrder();
    }

    public void shipOrder() {
        orderState.shipOrder();
    }

    public void deliverOrder() {
        orderState.deliverOrder();
    }

    public void cancelOrder() {
        orderState.cancelOrder();
    }

    public Order getOrder() {
        return order;
    }
}
