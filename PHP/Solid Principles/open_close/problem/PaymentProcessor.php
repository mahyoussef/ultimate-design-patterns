<?php

use Solid\HelperClasses\Payment;
use Solid\HelperClasses\Order;

class PaymentProcessor {

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
}
