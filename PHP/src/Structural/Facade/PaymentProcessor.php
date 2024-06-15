<?php

namespace App\Structural\Facade;

class PaymentProcessor
{    
    /** 
     * @param  float $amount
     * @param  PaymentMethod $paymentMethod
     * @return void
     */
    public function processPayment(float $amount, PaymentMethod $paymentMethod)
    {
        echo ("Processing the overall payment with amount: " . $amount . " using: "
            . $paymentMethod->getType());
    }
}
