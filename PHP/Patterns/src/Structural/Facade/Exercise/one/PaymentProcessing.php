<?php

namespace App\Structural\Facade\Exercise\one;

class PaymentProcessing
{
    /** 
     *
     * @param  mixed $amount
     * @param  mixed $paymentMethod
     * @return string
     */
    public function processPayment(float $amount, string $paymentMethod): string
    {
        return "Payment of " . $amount . " processed using " . $paymentMethod;
    }
}