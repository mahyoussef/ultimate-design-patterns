<?php

namespace DesignPatterns\Behavioral\Strategy\PaymentWays;

use DesignPatterns\Behavioral\Strategy\Interfaces\PaymentStrategy;

class CashPaymentStrategy implements PaymentStrategy
{
    public function processPayment(float $amount): void
    {
        echo "Processing payment of Cash...";
    }
}
