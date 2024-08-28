<?php

namespace App\Structural\Facade;

class VisaCard implements PaymentMethod
{    
    /** 
     * @return string
     */
    public function getType(): string
    {
        return "VisaCard";
    }
}