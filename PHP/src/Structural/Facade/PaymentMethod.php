<?php

namespace App\Structural\Facade;

interface PaymentMethod
{    
    /** 
     *
     * @return string
     */
    public function getType(): string;
}