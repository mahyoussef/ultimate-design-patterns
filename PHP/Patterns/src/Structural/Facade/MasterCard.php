<?php

namespace App\Structural\Facade;

class MasterCard implements PaymentMethod
{    
    /** 
     * @return string
     */
    public function getType(): string
    {
        return "MasterCard";
    }
}