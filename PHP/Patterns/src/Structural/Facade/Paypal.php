<?php

namespace App\Structural\Facade;

class Paypal implements PaymentMethod
{    
    /** 
     * @return string
     */
    public function getType(): string
    {
        return "Paypal";
    }
}