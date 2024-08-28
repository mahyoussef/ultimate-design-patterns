<?php

namespace App\Structural\Facade\Exercise\one;

class OrderFacade
{

    private InventoryManagement $inventoryManagement;

    private ShippingLogistics $shippingLogistics;

    private PaymentProcessing $paymentProcessing;

    public function __construct()
    {
        $this->inventoryManagement = new InventoryManagement();
        $this->shippingLogistics = new ShippingLogistics();
        $this->paymentProcessing = new PaymentProcessing();
    }

    /**
     * @param  string $productId
     * @param  int $quantity
     * @param  float $amount
     * @param  string $paymentMethod
     * @return bool
     */
    public function placeOrder(string $productId, int $quantity, float $amount, string $paymentMethod): bool
    {
        if (!$this->inventoryManagement->updateInventory($productId, $quantity)) {
            throw new \Exception("Insufficient inventory");
        }
        if (!$this->paymentProcessing->processPayment($amount, $paymentMethod)) {
            throw new \Exception("Payment failed");
        };
        $orderId = uniqid();
        $this->shippingLogistics->ship($orderId);
        echo "Order " . $orderId . " placed successfully";
        return true;
    }

}
