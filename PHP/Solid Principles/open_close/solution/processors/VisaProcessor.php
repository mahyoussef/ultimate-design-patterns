<?php

namespace Solid\Processors;
use Solid\Interfaces\PaymentProcessorInterface;
use Solid\HelperClasses\Payment;
use Solid\HelperClasses\Order;

class VisaProcessor implements PaymentProcessorInterface {

    public function process(Order $order, Payment $payment): void {
        echo "Processing visa card payment for order {$order->getName()}\n";
        echo "Issuing payment for amount {$order->getPrice()}\n";
    }
}