<?php

namespace DesignPatterns\Behavioral\Strategy\PaymentWays;

use DesignPatterns\Behavioral\Strategy\Interfaces\PaymentStrategy;

class VisaCardPaymentStrategy implements PaymentStrategy
{
    public function processPayment(float $amount): void
    {
        print("Processing payment of visa cards...");
        print("Calculating fees of the amount" . $amount . "for visa cards...");

    }
}
