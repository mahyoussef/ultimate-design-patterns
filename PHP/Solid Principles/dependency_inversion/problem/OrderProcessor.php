<?php

class OrderProcessor
{
    private $payment;

    public function __construct() {
        $this->payment = new Payment();
    }

    public function processOrder(Order $order) {
        // Process order
        $orderId = $order->getId();
        $amount = $order->getAmount();

        // Make payment
        return $this->payment->makePayment($amount);
    }
}