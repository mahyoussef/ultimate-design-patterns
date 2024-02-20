package facade.exercise;

public class OrderFacade {
    private InventoryManager inventoryManager;
    private PaymentProcessor paymentProcessor;
    private ShippingLogistics shippingLogistics;

    public OrderFacade() {
        this.inventoryManager = new InventoryManager();
        this.paymentProcessor = new PaymentProcessor();
        this.shippingLogistics = new ShippingLogistics();
    }

    public boolean placeOrder(String productId, int quantity, double amount, String paymentMethod) {
        // Check inventory
        if (!inventoryManager.updateInventory(productId, quantity)) {
            return false;
        }

        // Process payment
        if (!paymentProcessor.processPayment(amount, paymentMethod)) {
            return false;
        }

        // Ship order
        String orderId = generateOrderId(); // Assume orderId generation
        String shippingStatus = shippingLogistics.shipOrder(orderId);
        System.out.println("Shipping Status: " + shippingStatus);

        return true;
    }

    private String generateOrderId() {
        // Logic to generate order id
        return "12345"; // Placeholder value
    }
}
