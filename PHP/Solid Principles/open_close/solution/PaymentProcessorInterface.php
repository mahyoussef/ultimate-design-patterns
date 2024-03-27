<?php

namespace Solid\Interfaces;
use Solid\HelperClasses\Payment;
use Solid\HelperClasses\Order;

interface PaymentProcessorInterface {
    public function process(Order $order, Payment $payment): void;
}