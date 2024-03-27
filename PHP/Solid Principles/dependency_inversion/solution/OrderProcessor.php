<?php


class OrderProcessor {
    private $payment;

    public function __construct(PaymentGateway $payment) {
        $this->payment = $payment;
    }

    public function processOrder(Order $order) {
        // Process order
        $orderId = $order->getId();
        $amount = $order->getAmount();

        // Make payment
        return $this->payment->makePayment($amount);
    }
}
