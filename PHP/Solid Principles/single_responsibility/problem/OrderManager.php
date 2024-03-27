<?php

use Solid\HelperClasses\Customer;
use Solid\HelperClasses\Payment;
use Solid\HelperClasses\Order;

class OrderManager {

    public function processOrder(Order $order) {
        echo "Processing order: {$order->getName()} now...\n";
    }

    public function processPayment(Order $order, Payment $payment) {
        echo "Processing payment of order {$order->getName()}\n";
        echo "Issuing payment for amount {$order->getPrice()}\n";

        switch ($payment->getType()) {
            case 'VISA':
                echo "Processing visa card payments...\n";
                break;
            case 'Master_Card':
                echo "Processing master card payments...\n";
                break;
            case 'American_Express':
                echo "Processing american express card payments...\n";
                break;
            default:
                throw new Exception("Unsupported payment type: {$payment->getType()}\n");
        }
    }

    public function sendEmailNotification(Customer $customer, string $message) {
        echo "Sending email notification to: {$customer->getEmail()} with message: $message\n";
    }
}