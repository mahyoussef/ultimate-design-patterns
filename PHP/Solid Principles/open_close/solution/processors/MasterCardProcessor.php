<?php

namespace Solid\Processors;
use Solid\Interfaces\PaymentProcessorInterface;
use Solid\HelperClasses\Payment;
use Solid\HelperClasses\Order;

class MasterCardProcessor implements PaymentProcessorInterface {

    public function process(Order $order, Payment $payment): void {
        echo "Processing master card payment for order {$order->getName()}\n";
        echo "Issuing payment for amount {$order->getPrice()}\n";
    }
}