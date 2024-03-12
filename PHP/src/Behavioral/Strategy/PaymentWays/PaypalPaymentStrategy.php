<?php

namespace DesignPatterns\Behavioral\Strategy\PaymentWays;

use DesignPatterns\Behavioral\Strategy\Interfaces\PaymentStrategy;

class PaypalPaymentStrategy implements PaymentStrategy
{
    public function processPayment(float $amount): void
    {
        print("Processing payment of paypal...");
        print("Calculating fees of the amount" . $amount . "for paypal...");

    }
}
